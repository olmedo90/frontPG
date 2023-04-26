
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api_users } from "../../apiURL";
import FormUser from "./FormUser";
import { EditUser } from './EditUser';

const PerfilUser = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modeEdit, setModeEdit] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const id = parseInt(params.id);
  const [userProfile, setUserProfile] = useState([]);
  
  useEffect(() => {
    const getUser = async () => {
      try {
        await fetch(`${api_users.api_root}/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setUserProfile(data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);
  
  const editProfile=(id)=>{
    navigate(`editUser/${id}`, {replace:true})
  }
  return (
    <div className="h-container-title col-md-9  row py-3 d-flex  justify-content-center">
      {!modeEdit && (
        <>
          <h2 className="col-md-11 text-center ">Mi Informacion personal</h2>
          <section className="col-md-9 my-3 row">
            <span className="fs-4 ">
              {" "}
              <b>{userProfile.roleUser}</b>
            </span>
            <span className="fs-4  "> {userProfile.firstName}</span>
            <span className="fs-4"> {userProfile.lastName}</span>
            <span className="fs-4">
              Nombre de Usuario: <b>{userProfile.username}</b>{" "}
            </span>
            <span className="fs-4">
              Email: <b>{userProfile.email}</b>{" "}
            </span>
          </section>
          <hr />
          <section className="cols-md-11 d-flex justify-content-center">
            <button className="btn btn-outline-secondary" onClick={()=>handleShow()}>
              Editar Informacion
            </button>
          </section>
          <EditUser show={show} handleClose={handleClose} userProfile={userProfile} />
        </>
      )}
      {modeEdit&&(
        <FormUser userProfile={userProfile} modeEdit={modeEdit} setModeEdit={setModeEdit} />
      )}
    </div>
  );
};

export default PerfilUser;
