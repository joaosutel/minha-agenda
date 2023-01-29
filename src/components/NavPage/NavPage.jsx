import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

import menuItems from "../../data/menuItems";
import { capitalize } from "../../utils/textFormat";

import { Route, Routes, useLocation } from "react-router-dom";

const NavPage = () => {
  const [pageTitle, setPageTitle] = useState("");

  const location = useLocation();

  useEffect(() => {
    const pageLocation = location.pathname.replace("/", "").trim();

    const title = pageLocation ? capitalize(pageLocation) : "Home";

    setPageTitle(capitalize(title));
  }, [location]);

  return (
    <main className="p-4 flex-grow h-screen">
      <Header title={pageTitle} />
      <section className="flex px-4 pb-4 h-[92.2%]">
        <Routes>
          {menuItems.map((item, index) => {
            return (
              <Route key={index} path={item.linkTo} element={item.element} />
              // const { children } = item;
              //      {children &&
              //     children.map((child, index) => (
              //       <Route
              //         key={index}
              //         path={child.linkTo}
              //         element={child.element}
              //       />
              //     ))}
              // </Route>
            );
          })}
        </Routes>
      </section>
    </main>
  );
};

export default NavPage;
