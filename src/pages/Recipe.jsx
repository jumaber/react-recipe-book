import close from "../assets/close.svg";
import { useParams, useNavigate } from "react-router-dom";

export function Recipe({ recipes, setRecipes }) {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!recipes) {
    return <div>No recipe data available.</div>;
  }

  const currentRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!currentRecipe) {
    return <div>Recipe not found.</div>;
  }

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    navigate("/");
  };

  return (
    <div className="flex p-10 bg-orange-50 h-full"> 
      <div className="flex flex-col max-h-min bg-white my-10 p-6 rounded-lg ml-64">
        {/* Header */}
        <div className="mb-6 flex flex-row justify-end">
          <img src={close} alt="Close icon" className="cursor-pointer" onClick={() => navigate("/")} />
        </div>
        
        {currentRecipe.image.length > 0 && (
          <img 
            src={currentRecipe.image[0]} 
            className="card-single-recipe-img" 
            alt={currentRecipe.title} 
          />
        )}
        
        <h1 className="my-6 font-bold">{currentRecipe.title}</h1>

        {/* Ingredients & Directions */}
        <div className="flex gap-6">
          {/* Ingredients */}
          <div className="flex flex-col rounded-xl bg-amber-50 p-4 min-w-3xs max-h-max">
            <div className="font-bold pb-4">Ingredients</div>
            <ul className="list-none list-inside">
              {currentRecipe.ingredients.map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>

          {/* Directions */}
          <div className="flex flex-col rounded-xl bg-orange-100 p-4 max-h-max">
            <div className="font-bold pb-4">Directions</div>
            <ol className="list-decimal list-inside">
              {currentRecipe.directions.map((step, index) => (
                <li key={index} className="mb-2">{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex gap-4 justify-end mt-8">
          <button className="btn-sm-delete" onClick={() => deleteRecipe(currentRecipe.id)}>
            Delete
          </button>
          <button className="btn-sm">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
