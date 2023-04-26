import { handleResponse } from "../CheckHttpStatus";
import { Types } from "../types/types";

const URL_API = "http://localhost:7/api/login/signin";



export const loginUser=async(userDispatch, loginPayload)=> {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };
  try {
    const response= await fetch(URL_API, requestOptions);
    const data = await handleResponse(response);
    // let response = await fetch(URL_API, requestOptions);
    // let data = await response.json();

    if (data.success) {
      userDispatch({ type: Types.Login.LOGIN_SUCCESS, userPayload: data });
      return data;
    }
    if (!data.success) {
      userDispatch({ type: Types.Login.LOGIN_ERROR, userPayload: data.error });
      console.log(
        "🚀 ~ file: LoginActions.js:22 ~ loginUser ~ data.error:",
        data.error
      );
      return data.error;
    }
  } catch (error) {
    console.log(error);
  }
}
