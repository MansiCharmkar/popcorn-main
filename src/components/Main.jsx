import Box1 from "./Box1";
import Box2 from "./Box2";
import styles from "../styles/Main.module.css";

function Main({
    movies,
    handleMovieCardClick,
    movieDetails,
    activeMovieID,
    handleCloseMovieDetail,
    isLoadingMovies,
    isLoadingMovieDetails,
    handleAddMovieToWatchList,
    watchList,
}) {
    return (
        <main className={styles.main}>
            <Box1
                movies={movies}
                handleMovieCardClick={handleMovieCardClick}
                activeMovieID={activeMovieID}
                isLoadingMovies={isLoadingMovies}
            />
            <Box2
                movieDetails={movieDetails}
                handleCloseMovieDetail={handleCloseMovieDetail}
                isLoadingMovieDetails={isLoadingMovieDetails}
                handleAddMovieToWatchList={handleAddMovieToWatchList}
                watchList={watchList}
            />
        </main>
    );
}

export default Main;
