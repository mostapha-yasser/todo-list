import { Outlet } from "react-router-dom";
import Header from "../components/fixedComponents/Header";
import Footer from "../components/fixedComponents/Footer";

function AppLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-1 w-11/12 sm-w-10/12 md-w-9/12 lg:w-8/12 mx-auto">
            <Outlet/>
            </main>
            <Footer/>
            
        </div>
    );
}

export default AppLayout;