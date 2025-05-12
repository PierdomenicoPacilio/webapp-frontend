import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main className="container mt-4">
                <Outlet />
            </main>
            <footer className="mt-4">
                footer
            </footer>
        </>
    )
};

export default DefaultLayout;