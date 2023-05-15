import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import { DrawerContext } from "../../ContextProyect/ProyectContexts";
import { Drawer } from "../Drawer";
import { Header } from "../Header";

const Home = () => {
  const { showDrawer } = useContext(DrawerContext);
  return (
    <div className="col-md-12   d-flex flex-row  justify-content-center ">
      <Drawer />
      <section
        className={`bg-home w-content-open row  d-flex flex-column justify-content-start ${
          !showDrawer.show && "w-content-close"
        }`}
      >
        <Header />
        <div className="  w-container-open  py-2 px-4  container-fluid row  d-flex justify-content-center">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Home;
