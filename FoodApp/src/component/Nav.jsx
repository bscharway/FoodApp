import styles from "./nav.module.css";

export default function Nav({ currentView, setCurrentView }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo} onClick={() => setCurrentView("home")}>
          🍔 Laura and Brights food App
        </div>
        <div className={styles.navLinks}>
          <button
            className={`${styles.navLink} ${currentView === "home" ? styles.active : ""}`}
            onClick={() => setCurrentView("home")}
          >
            Home
          </button>
          <button
            className={`${styles.navLink} ${currentView === "about" ? styles.active : ""}`}
            onClick={() => setCurrentView("about")}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}