import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const MovieCard = ({ movie }) => {

    const { id, title, director, abstract, imagePath, reviews_vote } = movie;

    return (
        <div className="card shadow-sm h-100">
            <img src={imagePath} className="card-img-top mx-auto d-block mt-3"
                alt={title} style={{ maxHeight: "250px", width: "auto", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="mb-1">Director: <strong>{director}</strong></p>
                <p className="mb-1">Average vote: <strong><StarRating vote={reviews_vote} /></strong></p>
                <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>{abstract}</p>
                <div className="mt-auto">
                    <Link to={`/movies/${id}`} className="btn btn-outline-primary w-100 mt-3">
                        🎟️ Dettaglio del film
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default MovieCard;