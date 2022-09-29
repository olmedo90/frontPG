import React from 'react'
import { Outlet, Link } from 'react-router-dom'
export const PlanCuentas = () => {
  return (
    <>
    <Link to={'activos'}>activos</Link>
    <div>Plan de cuentas</div>
    <Outlet/>

    </>
  )
}
