import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../utils/Icon';
import { faFileInvoice, faHouse, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


export const NavbarAccount = () => {
    const Navigate = useNavigate();
    function handleClick({link}) {
        Navigate(link)
    }
  return (
    <div className="content-home py-3" role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={"/home"} className={`accounts`}><Icon style='iconNavbar' iconName={faHouse} /> Inicio</Link>
          <Link to={"chartOfAccounts"} className={`accounts`}><Icon style='iconNavbar' iconName={faFileInvoice} /> Plan de Cuentas</Link>
          <Link to={"icomeAndExpenses"}  className={`accounts`}><Icon style='iconNavbar' iconName={faPenToSquare}/> Ingresos-Egresos</Link>
        </Breadcrumbs>
    </div>
  );
};
