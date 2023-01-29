import React, { useEffect } from "react";
import { convertNumberToCurrency } from "../../utils/numberFormat";
import ActionButton from "../Button/ActionButton/ActionButton";
import ListTableBody from "./ListTableBody/ListTableBody";
import ListTableMainColumn from "./ListTableMainColumn/ListTableMainColumn";
import ListTableColumn from "./ListTableColumn/ListTableColumn";
import ListTableHeader from "./ListTableHeader/ListTableHeader";
import ListTableRow from "./ListTableRow/ListTableRow";
import ToggleButton from "../Button/ToggleButton/ToggleButton";
import { MdDeleteForever, MdCreate } from "react-icons/md";

export const ListTable = ({ headers, data, actions }) => {
  useEffect(() => {}, [headers, data, actions]);

  const handleIsActiveSwitch = (_, key) => {
    const filteredProduct = data.find((item) => item.id === key);
    const newProduct = { ...filteredProduct, active: !filteredProduct.active };

    actions.handleActiveOrDeactiveProduct(newProduct);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <ListTableHeader headers={headers} />
        <ListTableBody>
          {data.map((product, index) => {
            return (
              <ListTableRow key={index}>
                <ListTableMainColumn
                  mainData={true}
                  iconSrc={product.icon}
                  iconAlt={product.description}
                  mainText={product.name}
                  subText={product.description}
                ></ListTableMainColumn>
                <ListTableColumn>
                  {convertNumberToCurrency(product.cost_price)}
                </ListTableColumn>

                <ListTableColumn>
                  {convertNumberToCurrency(product.price)}
                </ListTableColumn>

                <ListTableColumn>
                  {product.available ? "Yes" : "No"}
                </ListTableColumn>

                <ListTableColumn>
                  <ToggleButton
                    data={product}
                    switchFunction={handleIsActiveSwitch}
                  />
                </ListTableColumn>

                <ListTableColumn className="flex gap-4 justify-center">
                  <ActionButton tooltip="Edit">
                    <MdCreate
                      className="text-3xl text-slate-500 hover:text-slate-700"
                      onClick={() => {
                        actions.handleShowUpdateProductModal(product);
                      }}
                    />
                  </ActionButton>
                  <ActionButton tooltip="Delete">
                    <MdDeleteForever
                      className="text-3xl text-red-500 hover:text-red-700"
                      onClick={() => {
                        actions.handleShowDeleteProductModal(product);
                      }}
                    />
                  </ActionButton>
                </ListTableColumn>
              </ListTableRow>
            );
          })}
        </ListTableBody>
      </table>
    </div>
  );
};
