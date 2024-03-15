import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

function App() {
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
              Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
              vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
              elementum mauris aenean neque.{" "}
            </p>
          </div>

          {/* recipes container */}
          <div className="flex flex-col lg:flex-row justify-between mt-6 lg:mt-12 gap-6">
            {/* recipes */}
            <div className="w-full lg:w-2/3">
              <Recipes></Recipes>
            </div>
            {/* recipes cart */}
            <div className="w-full lg:w-1/3">
              <Cart></Cart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
