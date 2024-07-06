import { Navigate } from "react-router-dom";


export default function Logout() {
    return (
        <>
            <p>You have logged out</p>
            <Navigate to="/" />
        </>
    );
}