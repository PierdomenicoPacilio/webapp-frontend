import { NavLink } from "react-router-dom"
const Header = () => {
    return (
        <nav className="bg-warning d-flex justify-content-between p-2 align-items-center">
            <div>logo</div>
            <ul className="d-flex align-items-center gap-3 mb-0">
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/movies"}>index</NavLink>
                </li>
            </ul>
        </nav>
    )
};
export default Header;