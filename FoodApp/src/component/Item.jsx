import styles from "./item.module.css"
export default function Item({ ingreedient }) {
  return (
    <div>
      <div className={styles.itemcontainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` +
              ingreedient.image
            }
          />
        </div>
        <div className={styles.nameContainer}>
          <div>
            <div className={styles.name}>{ingreedient.name}</div>
            <div className={styles.amount}>{ingreedient.amount} {ingreedient.unit}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
