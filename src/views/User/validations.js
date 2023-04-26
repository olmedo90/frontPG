import * as Yup from 'yup';
import { regularExpressions } from '../../services/regularExpressions';


export const  formValues={
    firstName: "",
    lastName: "",
    ci: "",
    username: "",
    password: "",
    confirmPass:"",
    email: "",
    phoneNumber:'',
    roleUser: "",
    }
    
export   const validation = Yup.object().shape({
        firstName: Yup.string()
        .required('Por favor escriba su Nombre')
        .matches(regularExpressions.firstName, 'El Nombre solo puede contener letras y espacios'),
        lastName: Yup.string()
        .required('Por favor escriba su Apellido')
        // .matches(regularExpressions.lastName, 'El Apellido solo puede contener lestras y espacios'),
        // email: Yup.string()
        // .matches(regularExpressions.email, 'correco electronico no valido'),
        // ci: Yup.string()
        // .required('Por favor escriba su Cedula de Identidad') 
        // .matches(regularExpressions.email,'Por favor insterte el Numero de Identidad valido'),
        // password: Yup.string()
        // .min(5,'Minimo 5 caracteres')
        // .max(12, 'Maximo 12 caracteres ')
        // .matches(regularExpressions.password, 'caracteres permitidos (a-z, A-Z, -9, $, @, #, &, -, _, )'),
        // confirmPass: Yup.string()
        // .oneOf([Yup.ref('password'),null], 'Su Contraseña no coincide verifique.'),
        // phoneNumber: Yup.string()
        // .matches(regularExpressions.phonoNumber,'7 a 14 numeros'),
        // roleUser: Yup.string()
        // .required('Asigne un rol al Usuario')
        // .matches(regularExpressions.roleUser, 'Rol seleccionado no existe')
      })
    

// const FormSchema = yup.object().shape({
//     pass: yup
//       .string()
//       .min(8, 'Password must be 8 characters long')
//       .matches(/[-9]/, 'Password requires a number')
//       .matches(/[a-z]/, 'Password requires a lowercase letter')
//       .matches(/[A-Z]/, 'Password requires an uppercase letter')
//       .matches(/[\w]/, 'Password requires a symbol'),
//     confirm: yup
//       .string()
//       .oneOf([yup.ref('pass'), null], 'Must match "password" field value'),
//   });