import { arrayPagination } from "../utils/arrayPagination";

export const initialState = {
  loading: true,
  error: "",
  clients: [],
  pageConfig: {},
  tableHeaders: [],
  tableEntriesLimit: [],
  clientStatus: [],
};

export const tableHeaders = [
  "Client",
  "Cell Phone",
  "E-mail",
  "Birthdate",
  "Active",
  "Actions",
];

export const tableEntriesLimit = [5, 10, 20, 50];

export const clientStatus = ["All", "Active", "Inactive"];

export const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        error: "",
        clients: action.result,
        pageConfig: arrayPagination(action.result),
        tableHeaders,
        tableEntriesLimit,
        clientStatus,
      };

    case "CHANGE_PAGE_CONFIGS":
      return {
        ...state,
        pageConfig: action.result,
      };

    case "ERROR":
      return {
        loading: false,
        error: "Sommething Went Wrong",
        clients: [],
        pageConfig: {},
        tableHeaders: [],
      };
    default:
      return { ...state };
  }
};
