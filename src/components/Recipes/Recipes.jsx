import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('recipie.json')
        .then(res => res.json())
        .then(data => setRecipes(data))

    },[])

  return (
    <div className="grid grid-cols-2 gap-6">
        {
            recipes.map((recipe) => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
        }

    </div>
  );
}
