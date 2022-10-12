import React, { useState, useEffect } from 'react';
import { Gradient } from '../../utils/Colors';
import './header.css';
export const Header = () => {

  const [user, setUser] = useState(null);
  const dates = {
    users: 'Edson',
    rol: 'Admin'
  }
  const login = () => {
    setUser(dates);
  }
  const logout = () => {
    setUser(null);
  }
  // hours function
  
  return (
    <section className={`position-header  p-1 d-flex justify-content-between align-items-center row   `} >
      <img src="/assets/logoMabel.png" alt="alt" className='logo-mabels' />

      <h2 className={`col-md-6 `}>Distribuidora Mabel's Condori</h2>
      <nav className='col-md-3  row  d-flex justify-content-between align-items-center'>
      
        <h5 className='col-md-6  '>
          <img src={'/assets/User.png'} alt="" className='logo-users  ' />
          {dates.rol}
        </h5>
      </nav>
    </section>
  )
}
