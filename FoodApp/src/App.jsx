import { useState } from "react";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";
import "./app.css";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData}/>
    </div>
  );  
}

export default App;
