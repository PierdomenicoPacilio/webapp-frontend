import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md bg-warning px-4 py-2">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="navbar-brand fw-bold fs-4">Logo</div>
                <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-dark">Home Page</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/movies" className="nav-link text-dark">Movies Index</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
};
export default Header;