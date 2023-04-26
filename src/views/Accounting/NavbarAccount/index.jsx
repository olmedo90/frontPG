import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../utils/Icon';
import { faFileInvoice, faHouse } from '@fortawesome/free-solid-svg-icons';


export const NavbarAccount = () => {
    const Navigate = useNavigate();
    function handleClick({link}) {
        Navigate(link)
    }
  return (
    <div className="col-md-1 my-3" role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={"/dashboard"} className={`accounts`}><Icon style='iconNavbar' icon={faHouse} /> Inicio</Link>
          <Link to={"chartOfAccounts"} className={`accounts`}><Icon style='iconNavbar' icon={faFileInvoice} /> Plan de Cuentas</Link>
         
        </Breadcrumbs>
    </div>
  );
};
