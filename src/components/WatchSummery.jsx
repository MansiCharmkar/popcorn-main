import Emoji from "./Emoji";
import styles from "../styles/WatchedSummery.module.css";

function WatchSummery() {
    return (
        <div className={styles.summery}>
            <p>Movies you watched</p>
            <div>
                <span>
                    <Emoji txt="✌️" />
                    <p>x</p>
                </span>
                <span>
                    <Emoji txt="🍅" />
                    <p>xx</p>
                </span>
                <span>
                    <Emoji txt="⭐️" />
                    <p>xx</p>
                </span>
                <span>
                    <Emoji txt="🕗" />
                    <p>xx</p>
                </span>
            </div>
        </div>
    );
}

export default WatchSummery;
