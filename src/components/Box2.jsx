import styles from "../styles/Box2.module.css";
import MovieDetails from "./MovieDetails";
// import WatchedMovieList from "./WatchedMovieList";
// import WatchSummery from "./WatchSummery";

function Box2({ movieDetails, handleCloseMovieDetail }) {
    return (
        <div className={styles.box2}>
            {/* 
            <WatchSummery />
            <WatchedMovieList /> */}
            {movieDetails && (
                <MovieDetails
                    movieDetails={movieDetails}
                    handleCloseMovieDetail={handleCloseMovieDetail}
                />
            )}
        </div>
    );
}

export default Box2;
