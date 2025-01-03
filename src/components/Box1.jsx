import MovieList from "./MovieList";
import style from "../styles/Box1.module.css";

function Box1({ movies, handleMovieCardClick, activeMovieID }) {
    return (
        <div className={style.box1}>
            <MovieList
                movies={movies}
                handleMovieCardClick={handleMovieCardClick}
                activeMovieID={activeMovieID}
            />
        </div>
    );
}

export default Box1;
