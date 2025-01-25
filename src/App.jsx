import { useEffect, useState } from "react";
// import Main from "./components/Main";
import Nav from "./components/Nav";
import "./global.css";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import styles from "./styles/Main.module.css";

const KEY = "276bfff3";
const API_URL = `https://www.omdbapi.com/?apikey=${KEY}`;

function App() {
    //1. state
    const [query, setQuery] = useState("pink");
    const [movies, setMovies] = useState([]);

    const [watchList, setWatchList] = useState(function () {
        const data = JSON.parse(localStorage.getItem("watchList"));
        if (data) return data;
        else return [];
    });
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoadingMovies, setIsLoadingMovies] = useState(false);
    const [isLoadingMovieDetails, setIsLoadingMovieDetails] = useState(false);

    //2. Derived state
    const resultCount = movies.length;
    const activeMovieID = movieDetails?.imdbID;

    //3. Effect
    // 3.1 fetching movies
    useEffect(
        function () {
            async function fetchMovies() {
                setIsLoadingMovies(true);
                setMovies([]);

                const response = await fetch(`${API_URL}&s=${query}`);
                const data = await response.json();

                setIsLoadingMovies(false);
                setMovies(data.Search || []);
            }

            if (query.length >= 3) fetchMovies();
            else {
                setMovies([]);
            }
        },
        [query]
    );

    // 3.2 save updated watchlist into localStorage after every Render'
    useEffect(
        function () {
            localStorage.setItem("watchList", JSON.stringify(watchList));
        },
        [watchList]
    );

    //4. handller function
    function handleChangeSearchQuery(e) {
        setQuery(e.target.value);
    }

    // Click 1 : movieDetail will be null

    async function handleMovieCardClick(imdbID) {
        // 1. MovieCard's imdbID
        // 2. MovieDetail's imdbID

        // Close in 2nd click
        if (movieDetails?.imdbID === imdbID) {
            setMovieDetails(null);
            return;
        }

        // 1. Fetch movie details with imdbId
        setIsLoadingMovieDetails(true);
        setMovieDetails([]);

        const response = await fetch(`${API_URL}&i=${imdbID}`);
        const data = await response.json();
        setIsLoadingMovieDetails(false);

        // 2. Update movieDetail state
        setMovieDetails(data);
    }
    function handleCloseMovieDetail() {
        setMovieDetails(null);
    }
    function handleAddMovieToWatchList(movieDeatils, userRating) {
        const watchedMovie = {
            name: movieDeatils.Title,
            poster: movieDeatils.Poster,
            releaseDate: movieDeatils.Released,
            runtime: movieDeatils.Runtime,
            imdbRating: Number(movieDeatils.imdbRating),
            userRating: userRating,
            imdbID: movieDeatils.imdbID,
        };

        const index = watchList.findIndex(function (movie) {
            return movie.imdbID === movieDeatils.imdbID;
        });

        if (index !== -1) {
            watchList[index] = watchedMovie;
            setWatchList(function (watchList) {
                return [...watchList];
            });
        } else {
            setWatchList(function (watchList) {
                return [...watchList, watchedMovie];
            });
        }
    }

    function handleRemovemovieToWatchList(imdbID) {
        setWatchList(function (watchList) {
            watchList = watchList.filter(function (movie) {
                return movie.imdbID !== imdbID;
            });

            return [...watchList];
        });
    }

    return (
        <div>
            <Nav
                handleChange={handleChangeSearchQuery}
                query={query}
                resultCount={resultCount}
            />

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
                    handleRemovemovieToWatchList={handleRemovemovieToWatchList}
                />
            </main>

            {/* <Main
                movies={movies}
                handleMovieCardClick={handleMovieCardClick}
                movieDetails={movieDetails}
                activeMovieID={activeMovieID}
                handleCloseMovieDetail={handleCloseMovieDetail}
                isLoadingMovies={isLoadingMovies}
                isLoadingMovieDetails={isLoadingMovieDetails}
                handleAddMovieToWatchList={handleAddMovieToWatchList}
                watchList={watchList}
                handleRemovemovieToWatchList={handleRemovemovieToWatchList}
            /> */}
        </div>
    );
}

export default App;
