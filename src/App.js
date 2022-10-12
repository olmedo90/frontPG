import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { Drawer } from './Components/Drawer';
import { Header } from './Components/Header';
import { PlanCuentas } from './views/accounting/components/PlanCuentas';
import { IndexView, IndexUser, IndexAmin, Dashboar } from './views/IndexView';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import { Activos } from './views/accounting/components/Activos';

// imports module Invetories
import { IndexInventories } from './views/inventories/components/IndexInventories';
import { Login } from './Components/Login';

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: 'edson',
    permission: ['analize']
  });
  const login = () => {
    setUser({
      id: 1,
      name: 'edson',
      permission: ['analize']
    })
  }
  const logout = () => {
    setUser(null)
  }
  return (
    <Router>
      <div className="bg-primary h-screen-container w-screen-container row    " >
        <div className='col-md-12 bg-danger d-flex'>
        <Drawer /><Header />
        </div>
        <div className=''>
          <Routes>
            <Route path='/'
              element={
                <>
                  <Login />
                </>
              } />
            <Route path='/home'
              element={
                <>

                </>
              } />
            <Route path='/plancuentas/*' element={<PlanCuentas />}>
              <Route path='activos' element={<Activos />}></Route>
            </Route>
            <Route path='/indexUser' element={
              <ProtectedRoutes isAllowed={!!user}>
                <IndexUser />
              </ProtectedRoutes>

            }></Route>
            <Route element={<ProtectedRoutes user={user} isAllowed={!!user && user.permission.includes('analize')} />}>
              <Route path='/indexAdmin' element={<IndexAmin />}></Route>
              <Route path='/dashboard' element={<Dashboar />}></Route>
            </Route>

            {/* routes Inventarios */}
            <Route path='/inventarios/*' element={<IndexInventories />}>
            </Route>
            <Route path='*' element={<Navigate replace to={'/'} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
