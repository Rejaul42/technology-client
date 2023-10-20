import { useContext, useState } from "react";
import { authContest } from "../../Provider/AuthProvider";
import Swal from "sweetalert";
import { Link } from "react-router-dom";


const Register = () => {
    const {createUser} = useContext(authContest);
    const [errorMessage, setErrorMessage] = useState();

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email= e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        if(password.length <6){
            setErrorMessage('Password should be 6 character or longer')
            return
        }
        else if(!/[A-Z]/.test(password)){
            setErrorMessage('Password should be at least one upper case latter')
            return
        }
        else if(!/[#?!@$%^&*-]/.test(password)){
            setErrorMessage('Password should be at least one special character')
            return
        }

         setErrorMessage('')
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset()
            Swal("User create successfully", "You clicked the button!", "success");
        })
        .catch(error =>{
            setErrorMessage(error.message)
        })
    }
    return (
        <div className="flex justify-center items-center my-8">
            <div className="w-1/3">
                <div className=" flex-col lg:flex-row-reverse">

                    <div className=" flex-shrink-0 w-full shadow-xl bg-base-200">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                            {
                                errorMessage && <p className="text-red-600 font-semibold">{errorMessage}</p>
                            }
                        </form>
                        <p className="p-6 -mt-6 text-center">Already have an account? <span className="text-blue-600 underline font-medium"> <Link to="/login">Login</Link> </span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;