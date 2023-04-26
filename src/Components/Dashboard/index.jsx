import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom';

import { DrawerContext } from '../../ContextProyect/ProyectContexts'
import { Drawer } from '../Drawer'
import { Header } from '../Header'
import './styles.css'
const Dashboard = () => {
  const {showDrawer}= useContext(DrawerContext);
  return (
    <div className='col-md-12  d-flex flex-row  justify-content-center '>
            <Drawer />
        <section className={`w-content-open row d-flex justify-content-center ${!showDrawer.show&&'w-content-close'}`}>
            <Header/>
            <div className='  w-container-open  container-fluid row d-flex justify-content-center'>
              <Outlet/>
            </div>
        </section>

       
    </div>
  )
}

export default Dashboard