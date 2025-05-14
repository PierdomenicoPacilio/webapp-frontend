import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main className="container mt-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
};

export default DefaultLayout;