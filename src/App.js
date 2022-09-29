import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Drawer } from './layout/Drawer';
import { Index } from './routes/Index';
import { PlanCuentas } from './views/accounting/components/PlanCuentas';
import { IndexView, IndexUser, IndexAmin, Dashboar } from './views/IndexView';
import { useState } from 'react';
import { ProtectedRoutes } from './routes/ProtectedRoutes';
import { Activos } from './views/accounting/components/Activos';
function App() {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({
      id: 1,
      name: 'edson',
      permission:['analize']
    })
  }
  const logout = () => {
    setUser(null)
  }
  return (
    <Router>
      <div className="App d-flex">
        <Drawer />
        <div className="h-screen flex-1 p-7">
          <Navigations />
          {
            user ?
              <button onClick={logout}>logout</button>
              :
              <button onClick={login}>login</button>
          }
          <Routes>
            <Route path='/' element={<IndexView />} />
            <Route path='/plancuentas/*' element={<PlanCuentas />}>
                <Route path='activos' element={<Activos/>}></Route>
            </Route>
            <Route path='/indexUser' element={
              <ProtectedRoutes isAllowed={!!user}>
                <IndexUser />
              </ProtectedRoutes>

            }></Route>
            <Route element={<ProtectedRoutes user={user} isAllowed={!!user && user.permission.includes('analize')}/>}>
              <Route path='/indexAdmin' element={<IndexAmin />}></Route>
              <Route path='/dashboar' element={<Dashboar />}></Route>
            </Route>


          </Routes>
        </div>
      </div>



    </Router>

  );
}

export default App;

function Navigations() {
  return <nav>
    <ul>
      <li>
        <Link to={'/'}>principal</Link>
      </li>
      <li>
        <Link to={'/plancuentas'}>plan cuentas</Link>
      </li>
      <li>
        <Link to={'/indexUser'}>Users</Link>
      </li>
      <li>
        <Link to={'/indexAdmin'}>Admin</Link>
      </li>
      <li>
        <Link to={'/dashboar'}>Dashboard</Link>
      </li>
    </ul>
  </nav>
}
