const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} Pacinema. All rights reserved.</p>
                <ul className="list-unstyled d-flex gap-3 mb-0">
                    <li><a href="/about" className="text-light text-decoration-none">About</a></li>
                    <li><a href="/contacts" className="text-light text-decoration-none">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    )
};
export default Footer;