import styles from "../styles/WatchedMovie.module.css";
import Emoji from "./Emoji";
import { formateMovieLength } from "../helper";

function WatchedMovie({
    image,
    name,
    imdbRating,
    userRating,
    length,
    imdbID,
    handleRemovemovieToWatchList,
}) {
    return (
        <div className={styles.movie}>
            <button onClick={() => handleRemovemovieToWatchList(imdbID)}>
                <Emoji txt="❌" />
            </button>
            <div className={styles.imageBox}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.detailsBox}>
                <h4>{name}</h4>
                <div>
                    <span>
                        <Emoji txt="🍅" />
                        <p>{imdbRating}</p>
                    </span>
                    <span>
                        <Emoji txt="⭐️" />
                        <p>{userRating}</p>
                    </span>
                    <span>
                        <Emoji txt="🕗" />
                        <p>{formateMovieLength(length)}</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default WatchedMovie;
