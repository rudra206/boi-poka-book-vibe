import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate ();

    const handleBackToBookFromDashBoard = () =>{
        // navigate(-1);
        navigate ('/') //  direct path call

    }
    return (
        <div>
            <h2 className="text-5xl">Dashboard</h2>

            <div className="mt-10 flex items-center justify-center mb-3">
                <button className="btn" onClick={handleBackToBookFromDashBoard}>Go home</button>
            </div>
        </div>
    );
};

export default Dashboard;