import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  BsPencil,
  BsPersonCircle,
  BsPlusCircleFill,
  BsTrash,
} from "react-icons/bs";

import Client from "../Client/Client";
import Errors from "../Errors/Errors";

import Button from "../../components/Button/Button";
import Loading from "../../components/Modal/Loading/Loading";
import PageActions from "../../components/PageActions/PageActions";
import PageContainer from "../../components/PageContainer/PageContainer";
import TableColumn from "../../components/Table/TableColumn";
import TableControls from "../../components/Table/TableControls";
import TableData from "../../components/Table/TableData";
import TableHeaders from "../../components/Table/TableHeaders";
import Modal from "../../components/Modal/Modal";
import ToggleButton from "../../components/Button/ToggleButton/ToggleButton";

import { isoDateToDdMmYyyyDate } from "../../utils/dateFormat";
import { arrayPagination } from "../../utils/arrayPagination";
import { normalizePhoneNumber } from "../../utils/maskFormat";

import { ClientContext } from "../../context/ClientContext";

const BASE_API = process.env.REACT_APP_API_URL;

const Clients = () => {
  const { state, dispatch } = useContext(ClientContext);
  const [searchClient, setSearchClient] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const getClients = useCallback(() => {
    try {
      axios
        .get(`${BASE_API}/clients`)
        .then((response) => response.data)
        .then((data) => data.sort((a, b) => a.name.localeCompare(b.name)))
        .then((data) => dispatch({ type: "SUCCESS", result: data }))
        .catch(() => dispatch({ type: "ERROR" }));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getClients();
  }, [getClients]);

  const generateTableData = () => {
    return (
      state.clients
        // eslint-disable-next-line
        .filter((item) => {
          if (searchClient === "") {
            return item;
          } else if (
            item.name
              .toLowerCase()
              .trim()
              .includes(searchClient.toLowerCase().trim())
          ) {
            return item;
          }
        })
        .filter(
          (_, index) =>
            state.pageConfig.minIndex <= index &&
            state.pageConfig.maxIndex >= index
        )
        .map((client, index) => (
          <tr key={index}>
            <TableColumn>
              <TableData icon={<BsPersonCircle />}>{client.name}</TableData>
            </TableColumn>
            <TableColumn>
              <TableData>{normalizePhoneNumber(client.cellphone)}</TableData>
            </TableColumn>
            <TableColumn>
              <TableData>{client.email}</TableData>
            </TableColumn>
            <TableColumn>
              <TableData>{isoDateToDdMmYyyyDate(client.birthdate)}</TableData>
            </TableColumn>
            <TableColumn>
              <TableData>
                <ToggleButton
                  value={client.is_active}
                  callback={() => {
                    const data = { ...client, is_active: !client.is_active };
                    handleUpdateClient(client.id, data);
                  }}
                />
              </TableData>
            </TableColumn>
            <TableColumn>
              <TableData>
                <div className="flex item-center justify-center space-x-2">
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <BsPencil className="text-xl text-gray-600 hover:text-green-600" />
                  </div>
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <BsTrash className="text-xl text-gray-600 hover:text-red-600" />
                  </div>
                </div>
              </TableData>
            </TableColumn>
          </tr>
        ))
    );
  };

  const handleChangeTablePage = (moveType) => {
    let pageSize = +state.pageConfig.pageSize;
    let actualPage = +state.pageConfig.actualPage;
    let pageConfig = {};

    if (moveType === "first") {
      pageConfig = arrayPagination(state.clients, pageSize, 1);
    } else if (moveType === "prev") {
      pageConfig = arrayPagination(state.clients, pageSize, --actualPage);
    } else if (moveType === "next") {
      pageConfig = arrayPagination(state.clients, pageSize, ++actualPage);
    } else if (moveType === "last") {
      pageConfig = arrayPagination(state.clients, pageSize, actualPage, true);
    } else return;

    dispatch({
      type: "CHANGE_PAGE_CONFIGS",
      result: pageConfig,
    });
  };

  const handleUpdateClient = (id, data) => {
    try {
      axios
        .put(`${BASE_API}/clients/${id}`, data)
        .catch(() => dispatch({ type: "ERROR" }));

      getClients();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeTableLimit = (value) =>
    dispatch({
      type: "CHANGE_PAGE_CONFIGS",
      result: arrayPagination(
        state.clients,
        +value,
        state.pageConfig.actualPage
      ),
    });

  return (
    <PageContainer>
      {state.loading && <Loading />}
      <div className="py-2">
        <div className="my-2 flex sm:flex-col md:flex-row space-y-2 justify-between">
          <PageActions
            entriesLimit={state.tableEntriesLimit}
            pageConfig={state.pageConfig}
            clientStatus={state.clientStatus}
            searchValue={searchClient}
            search={setSearchClient}
            callback={handleChangeTableLimit}
          />
          <Button
            icon={<BsPlusCircleFill className="text-white" />}
            text="Add client"
            buttonStyle="bg-red-600 hover:bg-red-500 rounded-md w-[130px] !m-0"
            textStyle="text-md font-medium text-white"
            callback={() => setOpenModal(true)}
          />
        </div>
        {!state.loading && !!state.clients.length ? (
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <TableHeaders />

                <tbody>{generateTableData()}</tbody>
              </table>
              <TableControls
                values={state.pageConfig}
                callback={handleChangeTablePage}
              />
            </div>
          </div>
        ) : (
          <div id="error_page" className="h-[82vh] flex items-center">
            <Errors errorCode={204} />
          </div>
        )}
      </div>
      {openModal && (
        <Modal
          element={
            <Client
              formData={""}
              callback={(isSubmitSuccessful) => {
                setOpenModal(false);
                isSubmitSuccessful && getClients();
              }}
            />
          }
        />
      )}
    </PageContainer>
  );
};

export default Clients;
