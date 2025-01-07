import Emoji from "./Emoji";
import styles from "../styles/WatchedSummery.module.css";

function WatchSummery({ watchList }) {
    const movieCount = watchList.length;

    const avgUserRating =
        watchList.reduce(function (acc, movie) {
            return acc + movie.userRating;
        }, 0) / movieCount;

    const avgImdbRating =
        watchList.reduce(function (acc, movie) {
            return acc + movie.imdbRating;
        }, 0) / movieCount;

    const totalMovieLength = watchList.reduce(function (acc, movie) {
        return acc + Number(movie.runtime.split(" ")[0]);
    }, 0);

    return (
        <div className={styles.summery}>
            <p>Movies you watched</p>
            <div>
                <span>
                    <Emoji txt="✌️" />
                    <p>{movieCount}</p>
                </span>
                <span>
                    <Emoji txt="🍅" />
                    <p>{avgUserRating.toFixed(2)}</p>
                </span>
                <span>
                    <Emoji txt="⭐️" />
                    <p>{avgImdbRating.toFixed(2)}</p>
                </span>
                <span>
                    <Emoji txt="🕗" />
                    <p>{totalMovieLength} min</p>
                </span>
            </div>
        </div>
    );
}

export default WatchSummery;
