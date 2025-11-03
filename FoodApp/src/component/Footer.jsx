import styles from "./footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>FoodApp 🍕</h3>
          <p className={styles.footerText}>
            Your go-to destination for recipe inspiration and meal planning.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#home" className={styles.footerLink}>Home</a>
            </li>
            <li>
              <a href="#about" className={styles.footerLink}>About</a>
            </li>
            <li>
              <a 
                href="https://red-beach-0ddccb803.3.azurestaticapps.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Live App
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Contact</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a href="mailto:contact@foodapp.com" className={styles.footerLink}>
                Email Us
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/yourusername/FoodApp" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Powered By</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a 
                href="https://spoonacular.com/food-api"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Spoonacular API
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/playlist?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                FreeCodeCamp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} FoodApp. Built with ❤️ for meal planning and recipe discovery.
        </p>
      </div>
    </footer>
  );
}

