import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

const MoviesPage = () => {


    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('')

    function getMovies() {
        axios.get('http://localhost:3000/api/movies', {
            params: {
                search
            }
        })
            .then(response => {
                setMovies(response.data)
            })
            .catch(err => console.log(err))
    };

    function searchMovies(e) {
        e.preventDefault();
        getMovies();
    };


    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <h1>Movies</h1>
            <div className="d-flex justify-content-between">
                <h2>Movies List</h2>
                <form className="row g-3" onSubmit={searchMovies}>
                    <div className="col-auto">
                        <label className="visually-hidden">Cerca</label>
                        <input type="text" className="form-control" placeholder="Cerca"
                            value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Cerca</button>
                    </div>
                </form>
            </div>
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