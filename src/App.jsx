import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [carts, setCarts] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [minutes, setMinutes] = useState(0);
  const [calories, setCalories] = useState(0);
  const handleWantToCook = (recipe) => {
    const isExists = carts.find((cart) => cart.recipe_id == recipe.recipe_id);
    if (!isExists) {
      const newCarts = [...carts, recipe];
      setCarts(newCarts);
    } else {
      return toast.warn("Already Added");
    }
  };

  const handleDelete = (cart) => {
    const remaining = carts.filter((item) => item.recipe_id !== cart.recipe_id);
    setCarts(remaining);

    const newCooking = [...cooking, cart];
    setCooking(newCooking);

    const newMinutes = minutes + cart.preparing_time;
    setMinutes(newMinutes);
    const newCalories = calories + cart.calories;
    setCalories(newCalories);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <Banner></Banner>
        {/* recipes section */}
        <div className="my-9 lg:my-24">
          {/* recipes heading */}
          <div className="space-y-4 lg:space-y-6 text-center w-full lg:w-[823px] mx-auto">
            <h2 className="text-[#150B2B] text-2xl lg:text-4xl font-semibold">
              Our Recipes
            </h2>
            <p className="text-[#150B2B99] text-base font-normal">
            Discover a world of flavor with our signature recipes. From classic comfort foods to exotic dishes, each recipe is crafted to tantalize your taste buds and inspire your culinary creativity.
            </p>
          </div>

          {/* recipes container */}
          <div className="flex flex-col lg:flex-row justify-between mt-6 lg:mt-12 gap-6">
            {/* recipes */}
            <div className="w-full lg:w-2/3">
              <Recipes handleWantToCook={handleWantToCook}></Recipes>
            </div>
            {/* recipes cart */}
            <div className="w-full lg:w-1/3">
              <Cart
                carts={carts}
                handleDelete={handleDelete}
                cooking={cooking}
                minutes={minutes}
                calories={calories}
              ></Cart>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
