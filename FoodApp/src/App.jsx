import { useState } from "react";
import Search from "./component/Search";
import FoodList from "./component/FoodList";
import Nav from "./component/Nav";
import About from "./component/About";
import Footer from "./component/Footer";
import HowToUse from "./component/HowToUse";
import "./app.css";
import Container from "./component/Container";
import InnerConteiner from "./component/InnerConteiner";
import Fooddetails from "./component/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  const [currentView, setCurrentView] = useState("home");

  return (
    <div>
      <Nav currentView={currentView} setCurrentView={setCurrentView} />
      {currentView === "home" ? (
        <>
          <HowToUse />
          <Search foodData={foodData} setFoodData={setFoodData} />
          <Container>
            <InnerConteiner>
              <FoodList setFoodId={setFoodId} foodData={foodData} />
            </InnerConteiner>
            <InnerConteiner>
              <Fooddetails foodId={foodId} foodData={foodData} />
            </InnerConteiner>
          </Container>
        </>
      ) : (
        <About />
      )}
      <Footer />
    </div>
  );
}

export default App;
