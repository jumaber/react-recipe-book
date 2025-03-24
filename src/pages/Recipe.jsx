import close from "../assets/close.svg";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function Recipe({ recipes, setRecipes }) {

  const navigate = useNavigate();
  
  const { id } = useParams();

  // Guard clause if no recipe data is provided
  if (!recipes) {
    return <div>No recipe data available.</div>;
  }

  // Find the recipe with a matching id
const currentRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

  // If no recipe is found, display a message
  if (!currentRecipe) {
    return <div>Recipe not found.</div>;
  }

  const deleteRecipe = (id) => {
  const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
  setRecipes(updatedRecipes);
  navigate("/"); // 👈 Redirect to MainContent
};

  

return (
    <div className="flex p-10 bg-orange-50 h-full"> 

      <div className="flex flex-col max-h-min bg-white my-10 p-6 rounded-lg ml-64">
        {/* Header */}
        <div className="mb-6 flex flex-row justify-end">
          <img src={close} alt="Close icon" />
        </div>
        <img src={currentRecipe.image} className="card-single-recipe-img" alt={currentRecipe.title} />
        <h1 className="my-6 font-bold">{currentRecipe.title}</h1>

        {/* Ingredients & Directions */}
        <div className="flex gap-6">
          {/* Ingredients */}
          <div className="flex flex-col rounded-xl bg-amber-50 p-4 min-w-3xs max-h-max">
            <div className="font-bold pb-4">Ingredients</div>
            <ol className="list-none text-base/9">
              {currentRecipe.ingredients}
            </ol>
          </div>

          {/* Directions */}
          <div className="flex flex-col rounded-xl bg-orange-100 p-4 max-h-max">
            <div className="font-bold pb-4">Directions</div>
            <div>{currentRecipe.directions}</div>
          </div>
        </div>
        <div className="flex gap-4 justify-end mt-30">
        <button className="btn-sm-delete" onClick={() => deleteRecipe(currentRecipe.id)}>
          Delete
        </button>


          <button className="btn-sm" >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
