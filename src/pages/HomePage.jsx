import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <main className="container mt-5">
            {/* Hero Section */}
            <section className="text-center py-5">
                <h1 className="display-4 fw-bold">Welcome to Pacinema 🎥</h1>
                <p className="lead text-muted">
                    Dive into the world of cinema. Discover, review and vibe with your favorite movies.
                </p>
                <Link to="/movies" className="btn btn-warning btn-lg mt-3">
                    Browse Movies
                </Link>
            </section>

            {/* Features */}
            <section className="row mt-5 text-center">
                <div className="col-md-4 mb-4">
                    <h4>🎬 Discover</h4>
                    <p>Explore a wide collection of films from every genre, era, and director.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <h4>⭐ Rate</h4>
                    <p>Leave your mark with quick star-based reviews. Keep it short, keep it spicy.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <h4>💬 Connect</h4>
                    <p>Read what the community thinks and add your take. It’s a movie club, basically.</p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center my-5">
                <p className="text-muted fst-italic">“Movies touch our hearts and awaken our vision.”</p>
                <p>— Martin Scorsese</p>
            </section>
        </main>
    );
}
