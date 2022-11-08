import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { AuthContext } from "../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center my-10">
                <BounceLoader color="skyblue" size={60}></BounceLoader>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default PrivateRoute;
