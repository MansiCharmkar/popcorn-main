import Movie from "./Movie";
import styles from "../styles/MovieList.module.css";

function MovieList({ movies, handleMovieCardClick, activeMovieID }) {
    return (
        <div className={styles.movieList}>
            {movies.map(function (movie) {
                return (
                    <Movie
                        image={movie.Poster}
                        name={movie.Title}
                        year={movie.Year}
                        imdbID={movie.imdbID}
                        handleMovieCardClick={handleMovieCardClick}
                        active={movie.imdbID === activeMovieID}
                        key={movie.imdbID}
                    />
                );
            })}
        </div>
    );
}

export default MovieList;
