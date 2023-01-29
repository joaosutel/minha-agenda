import { MdCreate, MdDeleteForever } from "react-icons/md";

const modalModel = {
  default: {
    title: "Default",
    content: "Do you really want to delete this product?",
    message: "This process cannot be undone",
    mainIcon: <MdDeleteForever className="text-8xl text-red-500" />,
    buttonCancel: {
      text: "OK",
      style:
        "mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600",
    },
  },
  create: {
    title: "Create",
    content: undefined,
    message: undefined,
    mainIcon: <MdCreate className="text-8xl text-blue-500" />,
    buttonOK: {
      text: "Create",
      style:
        "mb-2 md:mb-0 bg-blue-800 border border-blue-800 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600",
    },
    buttonCancel: {
      text: "Cancel",
      style:
        "mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100",
    },
  },
  update: {
    title: "Update",
    content: undefined,
    message: undefined,
    mainIcon: <MdCreate className="text-8xl text-blue-500" />,
    buttonOK: {
      text: "Update",
      style:
        "mb-2 md:mb-0 bg-blue-800 border border-blue-800 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600",
    },
    buttonCancel: {
      text: "Cancel",
      style:
        "mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100",
    },
  },
  delete: {
    title: "Delete",
    content: "Do you really want to delete this product?",
    message: "This process cannot be undone",
    mainIcon: <MdDeleteForever className="text-8xl text-red-500" />,
    buttonOK: {
      text: "Delete",
      style:
        "mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600",
    },
    buttonCancel: {
      text: "Cancel",
      style:
        "mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100",
    },
  },
};

export default modalModel;
