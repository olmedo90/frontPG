import React from "react";
import "./styles.css";
import { useContext } from "react";
import { DrawerContext } from "../../ContextProyect/ProyectContexts";
import { NavbarAccount } from "./NavbarAccount";
import { Outlet } from "react-router-dom";

export const Accounting = () => {
  const { showDrawer } = useContext(DrawerContext);

  return (
  <section className="col-md-12 row d-flex justify-content-center py-2">
      <NavbarAccount />
        <Outlet/>
  </section>
  );
};
