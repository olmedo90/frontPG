import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { regularExpressions } from "../../services/regularExpressions";
import { api_users } from "../../apiURL";

const FormUser = ({userProfile}) => {
    const [stateSend, setSendState] = useState(false);
    return (
        <>
        
        <h3 className=' col-md-1  d-flex align-items-center justify-content-center '>Registrar Usuario</h3>
        
        <Formik
            initialValues={{
            firstName: "",
            lastName: "",
            ci: "",
            username: "",
            password: "",
            email: "",
            roleUser: "",
            }}
            validate={(values) => {
            let error = {};
            if (!values.firstName) {
                error.firstName = "Por favor ingrese el Nombre";
            } else if (!regularExpressions.firstName.test(values.firstName)) {
                error.firstName = "El nombre solo puede contener letras y espacios";
            }

            if (!values.lastName) {
                error.lastName = "Por favor ingrese el Apellido";
            } else if (!regularExpressions.lastName.test(values.lastName)) {
                error.lastName =
                "Los apellidos solo pueden contener letras y espacios";
            }

            if (!values.ci) {
                error.ci = "Por favor ingrese su Cedula de Identidad";
            } else if (!regularExpressions.ci.test(values.ci)) {
                error.ci = "Por favor ingrese el Numero de Identidad valido";
            }
            if (!values.username) {
                error.username = "Por favor ingrese su Nombre de Usuario";
            } else if (!regularExpressions.username.test(values.username)) {
                error.username =
                "El nombre de usuario debe contener Letras, numeros, guion y guion_bajo de 4 a 16 caracteres";
            }
            if (!values.password) {
                error.password = "Por favor ingrese su contraseña";
            } else if (!regularExpressions.password.test(values.password)) {
                error.password =
                "Debe ser 5 a 15 digitos con los siguientes caracteres permitidos (a-z, A-Z, -9, $, @, #, &, -, _, )";
            }

            if (values.email) {
                if (!regularExpressions.email.test(values.email)) {
                error.email = "correco electronico no valido";
                }
            }

            if (!values.roleUser) {
                error.roleUser = "rol de usuario";
            } else if (!regularExpressions.roleUser.test(values.roleUser)) {
                error.roleUser = "rol no permitido";
            }

            return error;
            }}
            onSubmit={async (values, actions) => {
            actions.setStatus({ msg: "estamos aqui en submit" });

            try {
                const response = await fetch(
                `${api_users.api_login}/registerUser`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                }
                );
                const data = await response.json();

                if (data.success) {
                actions.setStatus({
                    success: true,
                    msg: data.message,
                });
                setTimeout(() => setSendState(false),2);
                } else {
                actions.setStatus({
                    success: false,
                    msg: data.error,
                });
                setTimeout(() => setSendState(true));
                }
            } catch (error) {
                console.log(error);
            }
            }}
        >
            {({ errors, touched, handleSubmit, status }) => (
            <Form className="my-4 py-2  " onSubmit={handleSubmit}>
                <div className="   row d-flex justify-content-center">
                <div className="col-md-1  d-flex flex-row justify-content-end row ">
                    <section className="col-auto py-2 fs-5  ">
                    <label htmlFor="firstName">Nombre:</label>
                    </section>
                    <section className="col-md-8">
                    <Field
                        className={`i1 col-md-9 form-control ${
                        touched.firstName && errors.firstName && "is-invalid"
                        } 
                                                            ${
                                                            touched.firstName &&
                                                            !errors.firstName &&
                                                            "is-valid"
                                                            }`}
                        type="text"
                        id="firstName"
                        placeholder="Ingrese su Nombre"
                        name="firstName"
                    />
                    {touched.firstName && errors.firstName && (
                        <span
                        className={` col-md-9 ${
                            touched.firstName &&
                            errors.firstName &&
                            "invalid-feedback"
                        } 
                                                ${
                                                touched.firstName &&
                                                !errors.firstName &&
                                                "valid-feedback"
                                                }`}
                        >
                        <b>{errors.firstName}</b>
                        </span>
                    )}
                    {touched.firstName && !errors.firstName && (
                        <span
                        className={` col-md-9 ${
                            touched.firstName &&
                            !errors.firstName &&
                            "valid-feedback"
                        }`}
                        >
                        <b> Se ve bien</b>
                        </span>
                    )}
                    </section>
                </div>
                <div className="col-md-1  d-flex flex-row justify-content-end row ">
                    <section className="col-auto py-2 fs-5  ">
                    <label htmlFor="lastName">Apellidos:</label>
                    </section>
                    <section className="col-md-8">
                    <Field
                        className={` col-md-9 form-control ${
                        touched.lastName && errors.lastName && "is-invalid"
                        } 
                                                            ${
                                                            touched.lastName &&
                                                            !errors.lastName &&
                                                            "is-valid"
                                                            }`}
                        type="text"
                        id="lastName"
                        placeholder="ingrese su Apellido"
                        name="lastName"
                    />
                    {touched.firstName && errors.lastName && (
                        <span
                        className={` col-md-9 ${
                            touched.lastName &&
                            errors.lastName &&
                            "invalid-feedback"
                        } 
                                                ${
                                                touched.lastName &&
                                                !errors.lastName &&
                                                "valid-feedback"
                                                }`}
                        >
                        <b>{errors.lastName}</b>
                        </span>
                    )}
                    {touched.lastName && !errors.lastName && (
                        <span
                        className={` col-md-9 ${
                            touched.lastName && !errors.lastName && "valid-feedback"
                        }`}
                        >
                        <b> Se ve bien</b>
                        </span>
                    )}
                    </section>
                </div>
                <div className="col-md-1  d-flex flex-row justify-content-end row ">
                    <section className="col-auto py-2 fs-5  ">
                    <label htmlFor="ci">Cedula de Identidad:</label>
                    </section>
                    <section className="col-md-8">
                    <Field
                        className={` col-md-9 form-control ${
                        touched.ci && errors.ci && "is-invalid"
                        } 
                                                            ${
                                                            touched.ci &&
                                                            !errors.ci &&
                                                            "is-valid"
                                                            }`}
                        type="text" 
                        id="ci"
                        placeholder="ejemplo:(45454545 o 45454545 1M)"
                        name="ci"
                    />
                    {touched.ci && errors.ci && (
                        <span
                        className={` col-md-9 ${
                            touched.ci && errors.ci && "invalid-feedback"
                        } 
                                                ${
                                                touched.ci &&
                                                !errors.ci &&
                                                "valid-feedback"
                                                }`}
                        >
                        <b>{errors.ci}</b>
                        </span>
                    )}
                    {touched.ci && !errors.ci && (
                        <span
                        className={` col-md-9 ${
                            touched.ci && !errors.ci && "valid-feedback"
                        }`}
                        >
                        <b> Se ve bien</b>
                        </span>
                    )}
                    </section>
                </div>
                <div className="col-md-1  d-flex flex-row justify-content-end row ">
                    <section className="col-auto py-2 fs-5  ">
                    <label htmlFor="username">Nombre de usuario:</label>
                    </section>
                    <section className="col-md-8">
                    <Field
                        className={` col-md-9 form-control ${
                        touched.username && errors.username && "is-invalid"
                        } 
                                                            ${
                                                            touched.username &&
                                                            !errors.username &&
                                                            "is-valid"
                                                            }`}
                        type="text"
                        id="username"
                        placeholder="ingrese su Nombre de Usuario"
                        name="username"
                    />
                    {touched.username && errors.username && (
                        <span
                        className={` col-md-9 ${
                            touched.username &&
                            errors.username &&
                            "invalid-feedback"
                        } 
                                                ${
                                                touched.username &&
                                                !errors.username &&
                                                "valid-feedback"
                                                }`}
                        >
                        <b>{errors.username}</b>
                        </span>
                    )}
                    {touched.username && !errors.username && (
                        <span
                        className={` col-md-9 ${
                            touched.username && !errors.username && "valid-feedback"
                        }`}
                        >
                        <b> Se ve bien</b>
                        </span>
                    )}
                    </section>
                </div>
                <div className="col-md-1  d-flex flex-row justify-content-end row ">
                    <section className="col-auto py-2 fs-5  ">
                    <label htmlFor="password">Contraseña:</label>
                    </section>
                    <section className="col-md-8">
                    <Field
                        className={` col-md-9 form-control ${
                        touched.password && errors.password && "is-invalid"
                        } 
                                                            ${
                                                            touched.password &&
                                                            !errors.password &&
                                                            "is-valid"
                                                            }`}
                        type="text"
                        id="password"
                        placeholder="ingrese su contraseña"
                        name="password"
                    />
                    {touched.password && errors.password && (
                        <span
                        className={` col-md-9 ${
                            touched.password &&
                            errors.password &&
                            "invalid-feedback"
                        } 
                                                ${
                                                touched.password &&
                                                !errors.password &&
                                                "valid-feedback"
                                                }`}
                        >
                        <b>{errors.password}</b>
                        </span>
                    )}
                    {touched.password && !errors.password && (
                        <span
                        className={` col-md-9 ${
                            touched.password && !errors.password && "valid-feedback"
                        }`}
                        >
                        <b> Se ve bien</b>
                        </span>
                    )}
                    </section>
                </div>
                <div className="col-md-1  d-flex flex-row justify-content-end row ">
                    <section className="col-auto py-2 fs-5  ">
                    <label htmlFor="email">Correo electronico:</label>
                    </section>
                    <section className="col-md-8">
                    <Field
                        className={` col-md-9 form-control  ${
                        touched.email && errors.email && "is-invalid"
                        } 
                                                            ${
                                                            touched.email &&
                                                            !errors.email &&
                                                            "is-valid"
                                                            }`}
                        type="email"
                        id="email"
                        placeholder="ejemplo@gmail.com"
                        name="email"
                    />
                    {touched.email && errors.email && (
                        <span
                        className={` col-md-9 ${
                            touched.email && errors.email && "invalid-feedback"
                        } 
                                                ${
                                                !errors.email && "valid-feedback"
                                                }`}
                        >
                        <b>{errors.email}</b>
                        </span>
                    )}
                    {touched.email && !errors.email && (
                        <span
                        className={` col-md-9 ${
                            touched.email && !errors.email && "valid-feedback"
                        }`}
                        >
                        <b> Se ve bien</b>
                        </span>
                    )}
                    </section>
                </div>
                <div className="col-md-1  d-flex flex-row justify-content-end row ">
                    <section className="col-auto py-2 fs-5  ">
                    <label htmlFor="roleUser">Role de Usuario:</label>
                    </section>
                    <section className="col-md-8">
                    <Field
                        className={` col-md-9 form-control ${
                        touched.roleUser && errors.roleUser && "is-invalid"
                        } 
                                                            ${
                                                            touched.roleUser &&
                                                            !errors.roleUser &&
                                                            "is-valid"
                                                            }`}
                        as="select"
                        id="roleUser"
                        name="roleUser"
                    >
                        <option value="Vendedor">Usuario</option>
                        <option value="Administrador">Administrador</option>
                    </Field>

                    {touched.roleUser && errors.roleUser && (
                        <span
                        className={` col-md-9 ${
                            touched.roleUser &&
                            errors.roleUser &&
                            "invalid-feedback"
                        } 
                                                ${
                                                touched.roleUser &&
                                                !errors.roleUser &&
                                                "valid-feedback"
                                                }`}
                        >
                        <b>{errors.roleUser}</b>
                        </span>
                    )}
                    {touched.roleUser && !errors.roleUser && (
                        <span
                        className={` col-md-9 ${
                            touched.roleUser && !errors.roleUser && "valid-feedback"
                        }`}
                        >
                        <b> Se ve bien</b>
                        </span>
                    )}
                    </section>
                </div>{" "}
                <hr />
                <br />
                <div className="col-md-1 row d-flex justify-content-center">
                    <section className="col-md-6 row  d-flex justify-content-center">
                    <button
                        type="reset"
                        className=" col-auto btn btn-outline-secondary"
                    >
                        Cancelar
                    </button>
                    </section>

                    <section className="col-md-6 row d-flex justify-content-center">
                    <button
                        className="col-auto btn btn-outline-success"
                        type="submit"
                    >
                        Registrar Usuario
                    </button>
                    </section>
                    {stateSend && (
                    <>
                        {status?.success && (
                        <span className="text-success col-auto py-2">
                            <b>{status?.msg}</b>
                        </span>
                        )}
                        {!status?.success && (
                        <span className="text-danger col-auto py-2">
                            <b>{status?.msg}</b>
                        </span>
                        )}
                    </>
                    )}
                </div>
                </div>
            </Form>
            )}
        </Formik>
        </>
    );
};

export default FormUser;
