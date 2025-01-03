import styles from "../styles/Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoBox}>
      <img src="./logo.png" alt="popcorn" />
      <h1>POPCORN</h1>
    </div>
  );
}

export default Logo;
