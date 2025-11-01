import { useEffect, useState } from "react";

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
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} />
        <div>
          <span>
            <strong>⏱️{food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong> 👨‍👩‍👧‍👦Serves {food.servings} </strong>
          </span>
          <span>{food.vegetarian ? "🥕Vegetarian" : "🥩None vegetarian"}</span>
          <span>{food.vegan ? " 🐮Vegan meal" : ""}</span>
        </div>
        <div>
            <span>💲{food.pricePerServing/100} Per serving</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoadign? <p>Loading...</p>:food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>)) }
      </div>
    </div>
  );
}
