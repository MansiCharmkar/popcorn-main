import styles from "../styles/Box2.module.css";
import Loader from "./Loader";
import MovieDetails from "./MovieDetails";
import WatchedMovieList from "./WatchedMovieList";
import WatchSummery from "./WatchSummery";

function Box2({
    movieDetails,
    handleCloseMovieDetail,
    isLoadingMovieDetails,
    handleAddMovieToWatchList,
    watchList,
}) {
    return (
        <div className={styles.box2}>
            {isLoadingMovieDetails && <Loader />}

            {!isLoadingMovieDetails && !movieDetails && (
                <>
                    <WatchSummery />
                    <WatchedMovieList watchList={watchList} />
                </>
            )}

            {!isLoadingMovieDetails && movieDetails && (
                <MovieDetails
                    movieDetails={movieDetails}
                    handleCloseMovieDetail={handleCloseMovieDetail}
                    handleAddMovieToWatchList={handleAddMovieToWatchList}
                />
            )}
        </div>
    );
}

export default Box2;
