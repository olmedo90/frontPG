import React, { useContext } from "react";
import {
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import { LoginContext } from "../../ContextProyect/ProyectContexts";
import "./styles.css";
import { Types } from "../../types/types";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { user, userDispatch } = useContext(LoginContext);
  

  const navigate = useNavigate();
  // hours function
  const logout = () => {
    userDispatch(Types.Login.LOGOUT);
    navigate("/", { replace: true });
  };
  // mi perfil 
  const myProfile = ()=>{
    navigate(`userPerfil/${user?.id}`)
  }
  return (
    <section
      className={`position-header  d-flex justify-content-center align-items-center  row `}
    >
      {/* <img src="/assets/logoMabel.png" alt="alt" className='logo-mabels' /> */}
      <section className="col-md-9 d-flex justify-content-center ">
        <h2 className={` text-white `}>Distribuidora Mabel's CondorI</h2>
      </section>
      <section className="col-md-2 row  d-flex justify-content-end">
        <span className="col-auto  ">{user.roleUser}</span>
      </section>
      <section className="col-auto  d-flex justify-content-start  border-start border-dark">
        <ButtonGroup >
          <DropdownButton
          title=''
            as={ButtonGroup}
            id="bg-nested-dropdown"
            variant="secondary"
            size="md"
          >
            <Dropdown.Item  onClick={()=>myProfile()}>Tu Perfil</Dropdown.Item>
            <Dropdown.Item  onClick={()=> {navigate(`userRegister`)}}>Registrar Usuario</Dropdown.Item>
            <Dropdown.Item  >Lista de Usuarios</Dropdown.Item>
            <button  className="col-md-12 btnClose" onClick={()=>logout()}>Salir</button>
          </DropdownButton>
        </ButtonGroup>
      </section>
    </section>
  );
};
