
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import useAdmin from "../hooks/useAdmin";



const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = UseAuth();
    const location = useLocation();
   
    if(loading || isAdminLoading) {
        return <span className="loading loading-dots loading-lg"></span>
            
    }

    if(user && isAdmin) {
        return children;
    }

   return <Navigate to='/' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;