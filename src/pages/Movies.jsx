import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

const MoviesPage = () => {


    const [movies, setMovies] = useState([]);

    function getMovies() {
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                console.log(response.data)
                setMovies(response.data)
            })
            .catch(err => console.log(err))
    };


    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <div className="row">
                {movies.length ? movies.map(movie => (
                    <div key={movie.id} className="col-12 col-md-4 mt-3">
                        <MovieCard movie={movie} />
                    </div>
                )) : <div>Nessun elemento trovato</div>}
            </div>
        </>
    )
};

export default MoviesPage;