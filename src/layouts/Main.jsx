import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('dashboard')
    return (
        <div>
            {/* navbar */}
            {noHeaderFooter || <Navbar/>}
            {/* outlet */}
            <Outlet/>
            {/* footer */}
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;