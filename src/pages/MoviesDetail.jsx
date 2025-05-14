import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import StarRating from "../components/StarRating";
import ReviewForm from "../components/ReviewForm";

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
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center mb-4 mb-md-0">
                        <img className="img-fluid rounded shadow" src={movie.imagePath}
                            alt={movie.title} style={{ maxHeight: "400px", objectFit: "cover" }} />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="mb-3">{movie.title}</h1>
                        <p>Year: <strong>{movie.release_year}</strong></p>
                        <p>Genre: <strong>{movie.genre}</strong></p>
                        <p>Director: <strong>{movie.director}</strong></p>
                        <p className="mt-3">{movie.abstract}</p>
                    </div>
                </div>
            </div>

            <section id="review" className="container mt-5">
                <header className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                    <h4 className="mb-0">Community Reviews</h4>
                    <div className="text-end">
                        <small className="text-muted d-block">Average vote:</small>
                        <StarRating vote={movie.reviews_vote} />
                    </div>
                </header>

                {movie.reviews?.length > 0 ? (
                    renderReviews()
                ) : (
                    <div className="text-muted fst-italic">No reviews yet – be the first to leave one!</div>
                )}
            </section>

            <section className="container mt-5" id="addReview">
                <h5 className="mb-3">Leave your review</h5>
                <ReviewForm movie_id={id} refreshMovie={getMovie} />
            </section>
        </>
    )
};

export default MoviesDetailPage;