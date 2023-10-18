import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import loginBg from '../../assets/login.png'

const Login = () => {
    const [errorText, setErrorText] = useState('')
    const bgStyle = {
        backgroundImage: `url(${loginBg})`,
    }
    const navigate = useNavigate()
    const location = useLocation()

    const { googleSignIn, signInUser } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user);
        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
            e.target.reset()
            navigate(location.state ? location.state : '/')
            Swal.fire({
                icon: 'success',
                title: 'Congratulations...',
                text: 'Login Successfull',
            })
        })
        .catch(err =>{
            setErrorText(err.message)
            console.log(err);
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong Information!',
            })
        })
    }

    const handleGoogleButton = () => {
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            navigate(location.state ? location.state : '/')
            Swal.fire({
                icon: 'success',
                title: 'Congratulations...',
                text: 'Login Successfull',
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return (
        <div>
            <div className="items-center justify-center bg-cover bg-center min-h-screen " style={bgStyle}>
                <form onSubmit={handleLogin} className=" card-body md:3/4 lg:w-1/2 mx-auto ">
                    <h2 className="text-3xl mt-24 text-center font-bold">Please Login</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline ">Login</button>
                    </div>
                    <div>
                        {
                            errorText && <p className="text-red-600">{errorText}</p>
                        }
                    </div>
                    <label className="label">
                        New here? <Link to="/register" className="label-text-alt link link-hover ">Create an account</Link>
                    </label>
                    <div className="divider">continue with</div>


                </form>
                <div className="flex justify-center">
                    <div className="mb-5">
                        <button onClick={handleGoogleButton} className="btn btn-outline ">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;