import { useState } from "react";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";
import "./app.css";
import Container from "./component/Container";
import InnerConteiner from "./component/InnerConteiner";
import Fooddetails from "./component/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615")

  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerConteiner>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerConteiner>
        <InnerConteiner>
          <Fooddetails foodId={foodId} foodData={foodData}/>
        </InnerConteiner>
      </Container>
    </div>
  );
}

export default App;
