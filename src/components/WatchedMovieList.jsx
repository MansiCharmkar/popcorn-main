import WatchedMovie from "./WatchedMovie";
import styles from "../styles/WatchedMovieList.module.css";

const tempWatchedData = [
    {
        imdbID: "tt1375666",
        Title: "Inception",
        Year: "2010",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        runtime: 148,
        imdbRating: 8.8,
        userRating: 10,
    },
    {
        imdbID: "tt0088763",
        Title: "Back to the Future",
        Year: "1985",
        Poster: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        runtime: 116,
        imdbRating: 8.5,
        userRating: 9,
    },
];

function WatchedMovieList() {
    return (
        <div className={styles.watchedMovieList}>
            {tempWatchedData.map(function (movie) {
                return (
                    <WatchedMovie
                        image={movie.Poster}
                        name={movie.Title}
                        imdbRating={movie.imdbRating}
                        userRating={movie.userRating}
                        length={movie.runtime}
                        key={movie.imdbID}
                    />
                );
            })}
        </div>
    );
}

export default WatchedMovieList;
