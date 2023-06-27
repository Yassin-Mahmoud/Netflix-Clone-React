import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface props {
    children: React.ReactNode;
}

const ProtectedRout: React.FC<props> = ({ children }) => {
    const { user } = UserAuth();

    if (!user) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
};

export default ProtectedRout;
