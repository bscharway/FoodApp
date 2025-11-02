import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css"

export default function Fooddetails({ foodId, foodData }) {
  const [food, setFood] = useState({});
  const [isLoadign, setIsLoading] = useState(true);
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️{food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong> 👨‍👩‍👧‍👦Serves {food.servings} </strong>
          </span>
          <span><strong>{food.vegetarian ? "🥕Vegetarian" : "🥩None vegetarian"}</strong></span>
          <span><strong>{food.vegan ? " 🐮Vegan meal" : ""}</strong></span>
        </div>
        <div>
          <span><strong>💲{food.pricePerServing / 100} Per serving</strong></span>
        </div>
      </div>
      <div>
        <h2>Ingredients</h2>
        <div>
            <ol>
                {isLoadign ? (
              <p>Loading...</p>
            ) : (
              food.extendedIngredients.map((ingreedient) => (
                <li><img src={`https://spoonacular.com/cdn/ingredients_100x100/`+ingreedient.image}/>{ingreedient.original}</li>
              ))
            )}
            </ol>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoadign ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
