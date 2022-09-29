import React from 'react'
import {  Route } from 'react-router-dom';
import { PlanCuentas } from '../views/accounting/components/PlanCuentas';


export const Index = () => {
  return (
    <>
    <Route path='/plancuentas' element={<PlanCuentas/>}></Route>
    </>
  )
}
