import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {

    console.log(movie);

    return (
        <div className="card" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.abstract}</p>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">dettaglio del film</Link>
            </div>
        </div>
    )
};

export default MovieCard;