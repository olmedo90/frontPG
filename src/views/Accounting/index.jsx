import React from "react";
import "./styles.css";
import { useContext } from "react";
import { DrawerContext } from "../../ContextProyect/ProyectContexts";
import { NavbarAccount } from "./NavbarAccount";
import { Outlet } from "react-router-dom";

export const Accounting = () => {
  const { showDrawer } = useContext(DrawerContext);

  return (
  <section className="content row d-flex flex-column justify-content-center py-2">
      <NavbarAccount />
        <Outlet/>
  </section>
  );
};
