import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
export default function Recipe({recipe, handleWantToCook}) {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
  return (
    <div>
        <div className="card border border-[#28282833] p-6">
        <figure>
          <img
            src={recipe_image}
            alt="recipe"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body p-0 pt-6">
          <h2 className="text-[#282828] text-xl font-semibold">{recipe_name}</h2>
          <p className="text-[#878787] text-base font-normal mt-4">{short_description}</p>
          <div className="divider m-0"></div>
          <div>
            <h3 className="text-[#282828] text-lg font-medium">Ingredients: {ingredients.length}</h3>
            <ul className="text-[#878787] text-lg font-normal mt-4 list-disc list-inside">
                {
                 ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                }

            </ul>
          </div>
          <div className="divider m-0"></div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[#282828CC] text-base font-normal">
            <IoTimeOutline></IoTimeOutline>
            <p>{preparing_time} minutes</p>
            </div>
            <div className="flex items-center space-x-2 text-[#282828CC] text-base font-normal">
            <AiOutlineFire></AiOutlineFire>
            <p>{calories} calories</p>
            </div>
          </div>
          <div className="card-actions mt-5">
            <button onClick={()=>handleWantToCook(recipe)} className="bg-[#0BE58A] py-3 px-6 rounded-full text-[#150B2B] text-lg font-medium">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  )
}
