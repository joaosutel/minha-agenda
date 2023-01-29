import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavPage from "../../components/NavPage/NavPage";
import { ClientProvider } from "../../context/ClientContext";

const Main = () => {
  return (
    <React.Fragment>
      <section className="flex flex-row">
        <Navbar />
        <ClientProvider>
          <NavPage />
        </ClientProvider>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
