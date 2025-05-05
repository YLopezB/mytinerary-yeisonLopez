import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}) {
    const token = useSelector((state) => state.auth.token)
    if(!token)
        return <Navigate to='/signin'/>
    return children
}