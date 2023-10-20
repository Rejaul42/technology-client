import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert";
import { authContest } from "../../Provider/AuthProvider";


const Login = () => {
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate()
    const { signInUser, signInGoogle } = useContext(authContest);

    const handleGoogleLogIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user)
                Swal("User create successfully", "You clicked the button!", "success");
                navigate('/')
            })
            .catch(error => {
                setErrorMessage(error.message)
            })
    }

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal("User create successfully", "You clicked the button!", "success");
                navigate('/')
            })
            .catch(error => {
                setErrorMessage(error.message)
            })

    }
    return (
        <div className="flex justify-center items-center my-8">
            <div className="w-1/3">
                <div className=" flex-col lg:flex-row-reverse">

                    <div className=" flex-shrink-0 w-full shadow-xl bg-base-200">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {
                                errorMessage && <p className="text-red-600 font-semibold">{errorMessage}</p>
                            }
                        </form>
                        <p className="p-6 -mt-6 text-center">New in BRAND TECH? <span className="text-blue-600 underline font-medium"> <Link to="/register">Register</Link> </span></p>
                        <div className=" mb-8 flex items-center justify-center gap-2 text-2xl font-semibold">
                            <div>
                                <button onClick={handleGoogleLogIn} className="flex items-center gap-2 mb-6"><FcGoogle></FcGoogle>Login with Google</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;