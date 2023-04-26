import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../ContextProyect/LoginActions";
import { LoginContext } from "../../ContextProyect/ProyectContexts";
import "./styles.css";


export const Login = () => {
  const navigate = useNavigate();
  const {user,userDispatch}=useContext(LoginContext) ;

  const [username, setUserName]= useState('');
  const [password, setPassword]= useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleLogin = async (e)=>{
    e.preventDefault();
    try {
      let response = await loginUser(userDispatch,{username, password});
      
      if(response.success){
        navigate('/dashboard', {
          replace: true,
        });

      }
      if(!response.success){
        setErrorMessage(user.errorMessage)
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="container-login ">
      <form
        className="form  login-form row justify-content-center align-items-center"
        onSubmit={handleLogin}
      >
        <section className="col-lg-4 row justify-content-center  ">
          <span className="title text-center">User Login</span>
        </section>
        <hr />
        <span>{errorMessage}</span>
        <input
          type="text"
          name="username"
          className="login-username"
          placeholder="Usuario"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className="login-password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};
