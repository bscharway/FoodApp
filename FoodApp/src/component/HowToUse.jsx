import { useState } from "react";
import styles from "./howtouse.module.css";

export default function HowToUse() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.howToUseContainer}>
      <div 
        className={styles.header}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className={styles.icon}>💡</span>
        <span className={styles.title}>How to Use FoodApp</span>
        <span className={styles.toggleIcon}>
          {isExpanded ? "▼" : "▶"}
        </span>
      </div>
      {isExpanded && (
        <div className={styles.content}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            <span className={styles.stepText}>
              Type a food item or recipe name in the search bar (e.g., "pizza", "pasta", "salad")
            </span>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span>
            <span className={styles.stepText}>
              Press <strong>Enter</strong> to search for recipes
            </span>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>3</span>
            <span className={styles.stepText}>
              Browse the recipe list on the left and click any recipe to view details
            </span>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>4</span>
            <span className={styles.stepText}>
              View ingredients, instructions, cooking time, and dietary information on the right
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

