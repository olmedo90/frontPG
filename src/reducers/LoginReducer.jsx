import { Types } from "../types/types";


export const initState ={
    id:"",
    firstName:"",
    lastName: "" ,
    roleUser:"",
    token: "" ,
    errorMessage:""
  };


export const LoginReducer = (state, action) => {
  const {type, userPayload}= action;
  switch (type) {
   
    case Types.Login.LOGIN_SUCCESS:{
        return {
            ...state,
            id:userPayload.id,
            firstName:userPayload.firstName,
            lastName:userPayload.lastName,
            roleUser:userPayload.roleUser,
            token:userPayload.token
        };
    }
    case Types.Login.LOGOUT:{
      return{
        ...state,
        lastName:'',
        roleUser:'',
        token:''
      };
    }
    case Types.Login.LOGIN_ERROR:{
      console.log(action)
      return{
        ...state,
        errorMessage: userPayload,
      };
    }
    default:
      break;
     
  }
};
