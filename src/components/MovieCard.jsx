import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const MovieCard = ({ movie }) => {

    const { id, title, director, abstract, imagePath, reviews_vote } = movie;

    return (
        <div className="card" >
            <img src={imagePath} className="card-img-top w-50 mx-auto" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>Director: <strong>{director}</strong></p>
                <p>Average vote: <strong>{<StarRating vote={reviews_vote} />}</strong></p>
                <p className="card-text">{abstract}</p>
                <Link to={`/movies/${id}`} className="btn btn-primary">dettaglio del film</Link>
            </div>
        </div>
    )
};

export default MovieCard;