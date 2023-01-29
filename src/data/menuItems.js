import { BsFillPeopleFill, BsHouseFill } from "react-icons/bs";
import Clients from "../pages/Clients/Clients";

import Errors from "../pages/Errors/Errors";

const menuItems = [
  {
    label: "Home",
    icon: <BsHouseFill />,
    linkTo: "/",
    element: <Errors errorCode={500} />,
    isVisible: true,
  },

  {
    label: "Clients",
    icon: <BsFillPeopleFill />,
    linkTo: "/clients",
    element: <Clients />,
    isVisible: true,
  },

  {
    label: "Others",
    linkTo: "*",
    element: <Errors errorCode={404} />,
    isVisible: false,
  },
];

export default menuItems;
