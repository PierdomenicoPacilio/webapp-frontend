import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import StarRating from "../components/StarRating";

const MoviesDetailPage = () => {


    //leggere l'id che arriva in pagina
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    function getMovie() {
        axios(`http://localhost:3000/api/movies/${id}`)
            .then(response => {
                setMovie(response.data)
            }
            )
            .catch(err => console.log(err))
    }

    useEffect(getMovie, []);

    function renderReviews() {
        return movie.reviews.map(review => <ReviewCard key={review.id} data={review} />)
    }


    return (
        <>
            <div className="container row">
                <div className="col-6">
                    <h1>{movie.title}</h1>
                    <img className="w-50 mt-2" src={movie.imagePath} alt={movie.title} />
                </div>
                <div className="col-6 d-flex flex-column justify-content-center">
                    <p>year: <strong>{movie.release_year}</strong></p>
                    <p>genre: <strong>{movie.genre}</strong></p>
                    <p>director: <strong>{movie.director}</strong></p>
                    <p>{movie.abstract}</p>
                </div>
            </div>
            <section id="review" className="container mt-4">
                <header className="d-flex justify-content-between align-items-center">
                    <h4>Community reviews</h4>
                    <div>Average vote: {<StarRating vote={movie.reviews_vote} />}</div>
                </header>
                {movie.reviews?.length ?
                    renderReviews()
                    : <div>nessuna recensione</div>}
            </section>
        </>
    )
};

export default MoviesDetailPage;