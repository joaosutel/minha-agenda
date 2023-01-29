import React from "react";
import Button from "../../Button/Button";

export default function Delete({ modalType, data, actions }) {
  return (
    <div className="pb-8">
      <div className="text-center flex-auto justify-center pb-5">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300 px-8 pb-7">
          {data.name}
        </h1>
        <p className="text-lg text-gray-500 px-8">
          Do you really want to <strong>delete</strong> this item?
        </p>
        <p className="text-lg text-gray-500 px-8">
          This process <strong>cannot be undone!</strong>
        </p>
      </div>
      <div className="p-3 mt-2 text-center space-x-4 md:block">
        <Button
          buttonStyle="bg-white border hover:bg-gray-100"
          textStyle="text-sm font-medium text-gray-600"
          callback={actions.handleCloseModal}
        >
          Cancel
        </Button>

        <Button
          buttonStyle="bg-red-500 border border-red-500 hover:bg-red-600"
          textStyle="text-sm font-medium text-white"
          callback={() => {
            actions.handleDeleteProduct(data.id);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
