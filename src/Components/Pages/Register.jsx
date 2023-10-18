import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const {googleSignIn,createUSer} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const image = form.image.value
        const user = { email, password, name, image }
        console.log(user);

        createUSer(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const handleGoogleButton =() =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return (
        <div className="">
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
    );
};

export default Register;