import { Navigate, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const handleBackToBookFromError = () =>{
        // navigate(-1);
        navigate (`/`); // direct path call
    }
    const navigate =useNavigate ();
    return (
        <div>
            <h2 className="text-5xl">Page Not Found !!!</h2>

           <div className="mt-10 flex justify-center items-center">
            <button onClick={handleBackToBookFromError} className="btn">Go home</button>
           </div>
        </div>
    );
};

export default ErrorPage;