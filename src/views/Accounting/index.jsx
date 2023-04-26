import React from 'react'
import './styles.css';
import { Drawer } from '../../Components/Drawer/index';
import { Header } from '../../Components/Header/index';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { DrawerContext } from '../../ContextProyect/ProyectContexts';
import { NavbarAccount } from './NavbarAccount';

export const Accounting = () => {
  const {showDrawer}= useContext(DrawerContext);
  
  return (
    <div className='col-md-12  d-flex flex-row  justify-content-center '>
            <Drawer />
        <section className={`w-content-open row d-flex justify-content-center ${!showDrawer.show&&'w-content-close'}`}>
            <Header/>
            <div className='  w-container-open  container-fluid row d-flex justify-content-center'>
              <NavbarAccount/>
              <Outlet/>
            </div>
        </section>

       
    </div>
  )
}
