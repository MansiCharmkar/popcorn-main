import styles from "../styles/TotalResults.module.css";

function TotalResults({ resultCount }) {
    return (
        <div className={styles.totalResults}>
            <p>Found {resultCount} results</p>
        </div>
    );
}

export default TotalResults;
