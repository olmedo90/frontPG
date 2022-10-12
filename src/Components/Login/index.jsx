
import { Link } from 'react-router-dom';
import './login.css';

export const Login = () => {
    return (
        <div className="contenedor">
            <div className="body row d-flex ">
                <form className="form login-form row justify-content-center align-items-center">
                    <section className='col-lg-4'>
                        <img src='/assets/logoMabel.png' className='rounded-circle container-fluid fud'  alt="logo" />
                    </section>
                    <input type="email" className="login-username" placeholder="Email" />
                    <input type="password" className="login-password" placeholder="Password" />
                    <input  value="Login" className="login-submit col-lg-3" />
                    <Link to={'/home'}><button className='login-submit'>Ingresar</button></Link>
                </form>
            </div>
        </div>
    )
}
