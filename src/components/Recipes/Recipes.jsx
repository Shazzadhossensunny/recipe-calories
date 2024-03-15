import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

export default function Recipes({handleWantToCook}) {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('recipie.json')
        .then(res => res.json())
        .then(data => setRecipes(data))

    },[])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
            recipes.map((recipe) => <Recipe key={recipe.recipe_id} recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>)
        }

    </div>
  );
}
