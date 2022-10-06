import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/stylesGeneral.css';
import './styles/buttons.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Drawer } from './layout/Drawer';
import { PlanCuentas } from './views/accounting/components/PlanCuentas';
import { IndexView, IndexUser, IndexAmin, Dashboar } from './views/IndexView';
import { useState } from 'react';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import { Activos } from './views/accounting/components/Activos';

// imports module Invetories
import { IndexInventories } from './views/inventories/components/IndexInventories';
import { Header } from './layout/Header';
import { Buttons } from './layout/Buttons';

function App() {
  const [user, setUser] = useState(null);
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
      <div className=" d-flex  h-screenContainer w-screen ">
        <Drawer />
        <div className=" w-screen  body-nav bg-primary">
          <Header />

          <Routes>
            <Route path='/' element={<Buttons />} />
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
              <Route path='/dashboar' element={<Dashboar />}></Route>
            </Route>

            {/* routes Inventarios */}
            <Route path='/inventarios/*' element={<IndexInventories />}>
            </Route>
          </Routes>
        </div>
      </div>


    </Router>

  );
}

export default App;
