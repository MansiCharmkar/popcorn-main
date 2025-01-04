import Emoji from "./Emoji";
import styles from "../styles/Message.module.css";

function Message({ children }) {
    return <p className={styles.message}>{children}</p>;
}

export default Message;
