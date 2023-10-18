import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import loginBg from '../../assets/login.png'

const Register = () => {

    const bgStyle = {
        backgroundImage: `url(${loginBg})`,
    }

    const location = useLocation();
    const navigate = useNavigate();

    const { googleSignIn, createUSer } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const image = form.image.value
        const user = { email, password, name, image }
        console.log(user);
        if (password.length < 6) {
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must be 6 Characters Long!',
            })
        }
        else if (!/[A-Z]/.test(password)) {
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must Conatain 1 Uppercase Letter!',
            })
        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must Conatain 1 Special Character!',
            })
        }

        createUSer(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image
                })
                navigate(location.state ? location.state : '/')
                e.target.reset()
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations...',
                    text: 'Registration Successfull',
                })

            })
            .catch(err => {
                console.log(err);
                e.target.reset()
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'User Already Exist',
                })
            })
    }

    const handleGoogleButton = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(location.state ? location.state : '/')
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations...',
                    text: 'Login Successfull',
                })

            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="items-center justify-center bg-cover bg-center min-h-screen" style={bgStyle}>
                <form onSubmit={handleRegister} className="card-body md:3/4 lg:w-1/2 mx-auto">
                    <h2 className="text-3xl mt-20 text-center font-bold">Please Register</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Image URL</span>
                        </label>
                        <input type="text" name="image" placeholder="Your Image" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline ">Register</button>
                    </div>
                    <label className="label">
                        Have an account? <Link to="/login" className="label-text-alt link link-hover ">Please Login</Link>
                    </label>
                    <div className="divider">Continue with</div>
                </form>
                <div className="flex justify-center">
                    <div>
                        <button onClick={handleGoogleButton} className="btn btn-outline">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;