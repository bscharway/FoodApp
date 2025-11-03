import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h1 className={styles.title}>About FoodApp 🍕</h1>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Welcome to FoodApp</h2>
          <p className={styles.text}>
            FoodApp is a modern recipe discovery application built with React that helps 
            families and individuals find inspiration for their next meal. What started as 
            a learning project has become a practical tool we use daily to plan our weekly meals.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.text}>
            To make meal planning easier and more enjoyable by providing quick access to 
            a vast collection of recipes. Whether you're cooking for two adults or a family 
            with children, FoodApp helps you discover new dishes and plan your meals with ease.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <ul className={styles.featureList}>
            <li>🔍 Quick recipe search by keywords</li>
            <li>📋 Detailed recipe information including ingredients and instructions</li>
            <li>⏱️ Cooking time and serving size information</li>
            <li>🌱 Dietary information (vegetarian, vegan options)</li>
            <li>💰 Price per serving estimates</li>
            <li>📱 Responsive design for all devices</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <p className={styles.text}>
            Built with modern web technologies including React 19, Vite, and CSS Modules. 
            Recipe data is powered by the Spoonacular API, providing access to thousands 
            of recipes from around the world.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <p className={styles.text}>
            Have questions, suggestions, or feedback? We'd love to hear from you!
          </p>
          <div className={styles.contactInfo}>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@foodapp.com" className={styles.link}>
                contact@foodapp.com
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a 
                href="https://github.com/yourusername/FoodApp" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                View on GitHub
              </a>
            </p>
            <p>
              <strong>Live App:</strong>{" "}
              <a 
                href="https://red-beach-0ddccb803.3.azurestaticapps.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                Visit Live Site
              </a>
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Credits</h2>
          <p className={styles.text}>
            This project was built following the{" "}
            <a 
              href="https://www.youtube.com/playlist?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              FreeCodeCamp React Course
            </a>
            . Recipe data is provided by{" "}
            <a 
              href="https://spoonacular.com/food-api"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Spoonacular API
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

