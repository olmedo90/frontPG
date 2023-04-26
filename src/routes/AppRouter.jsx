import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Dashboard from "../Components/Dashboard/index";
import FormUser from "../views/User/FormUser";
import PerfilUser from "../views/User/PerfilUser";
import { ListUser } from "../views/User/ListUser";
import { Accounting } from "../views/Accounting";
import { ChartOfAccount } from "../views/Accounting/ChartOfAccounts";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="userPerfil/:id" element={<PerfilUser />} />
          <Route path="userRegister" element={<FormUser />} />
          <Route path="listUser" element={<ListUser></ListUser>} />
        </Route>

        <Route path="/accounting/*" element={<Accounting />}>
          <Route path="chartOfAccounts" element={<ChartOfAccount/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
