import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div className="h-screen flex flex-col justify-center items-center ">
                <div id="error-page" className="text-center flex  flex-col gap-3 text-4xl">
                    <img src="https://i.ibb.co/bmxgGT2/download-5.png" alt="" />
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>

                </div>
                <Link to='/'><button className="mt-8 bg-blue-600 px-4 py-2 rounded text-white text-2xl">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;