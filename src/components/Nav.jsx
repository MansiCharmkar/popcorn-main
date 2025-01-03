import Logo from "./Logo";
import Search from "./Search";
import TotalResults from "./TotalResults";

import styles from "../styles/Nav.module.css";

function Nav({ handleChange, query, resultCount }) {
    return (
        <div className={styles.nav}>
            <Logo />
            <Search handleChange={handleChange} query={query} />
            <TotalResults resultCount={resultCount} />
        </div>
    );
}

export default Nav;
