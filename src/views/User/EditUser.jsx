import {useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { formValues, validation } from "./validations";
import { TextField } from "@mui/material";

export const EditUser = ({show, handleClose, userProfile}) => {
  const [user, setUser]=useState(formValues)

  

  const { handleChange, handleSubmit, errors, values, setFieldValue } =
    
  useFormik({
    enableReinitialize: true,
      initialValues:user,
      // validationSchema: validation,
      onSubmit: (data) => {
        console.log(data);
      },
    });
    useEffect(()=>{
      if(userProfile){
        setUser(userProfile)
        console.log(values.user)
      }
    },[userProfile])

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      
      <Modal.Header closeButton>
        <Modal.Title>Editar Informacion</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
            <TextField
              fullWidth
              type="text"
              label="Nombre"
              size="small"
              variant="outlined"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              className="my-4"
            />
            <TextField
              
              fullWidth
              type="text"
              label="Apellidos"
              size="small"
              variant="outlined"
              name="lastName"
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btnCancel" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" className="btnCreate">
            Understood
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
