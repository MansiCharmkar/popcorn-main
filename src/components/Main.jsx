import Box1 from "./Box1";
import Box2 from "./Box2";
import styles from "../styles/Main.module.css";

function Main({
    movies,
    handleMovieCardClick,
    movieDetails,
    activeMovieID,
    handleCloseMovieDetail,
}) {
    return (
        <main className={styles.main}>
            <Box1
                movies={movies}
                handleMovieCardClick={handleMovieCardClick}
                activeMovieID={activeMovieID}
            />
            <Box2
                movieDetails={movieDetails}
                handleCloseMovieDetail={handleCloseMovieDetail}
            />
        </main>
    );
}

export default Main;
