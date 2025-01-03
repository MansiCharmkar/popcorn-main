import styles from "../styles/Movie.module.css";

function Movie({ imdbID, image, name, year, handleMovieCardClick, active }) {
    return (
        <div
            onClick={() => handleMovieCardClick(imdbID)}
            className={`${styles.movie} ${active ? styles.activeMovie : ""}`}
        >
            <div className={styles.imageBox}>
                <img
                    src={
                        image === "N/A"
                            ? "https://blocks.astratic.com/img/general-img-portrait.png"
                            : image
                    }
                    alt={name}
                />
            </div>

            <div className={styles.detailsBox}>
                <h3>{name}</h3>
                <p>{year}</p>
            </div>
        </div>
    );
}

export default Movie;
