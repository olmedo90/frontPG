import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import FormUser from "../views/User/FormUser";
import PerfilUser from "../views/User/PerfilUser";
import { ListUser } from "../views/User/ListUser";
import { Accounting } from "../views/Accounting";
import { ChartOfAccount } from "../views/Accounting/ChartOfAccounts";
import { Dashboard } from "../Components/Dashboard";
import Home from "../Components/Home";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/home/*" element={<Home />}>
          <Route path="accounting/*" element={<Accounting />}>
            <Route path="chartOfAccounts" element={<ChartOfAccount />} />
          </Route>
        </Route>
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="userPerfil/:id" element={<PerfilUser />} />
          <Route path="userRegister" element={<FormUser />} />
          <Route path="listUser" element={<ListUser></ListUser>} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
