import { useState } from "react";
import close from "../assets/close.svg";
import { useParams, useNavigate } from "react-router-dom";

export function Recipe({ recipes, setRecipes }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      navigate("/");
    }, 800); // match animation duration
  };

  if (!recipes) {
    return <div>No recipe data available.</div>;
  }

  const currentRecipe = recipes.find((recipe) => String(recipe.id) === id);

  if (!currentRecipe) {
    return (
      <div className="p-10 text-center text-red-600 font-bold">
        Recipe not found.
      </div>
    );
  }

  const deleteRecipe = (idToDelete) => {
    const updatedRecipes = recipes.filter(
      (recipe) => String(recipe.id) !== String(idToDelete)
    );
    setRecipes(updatedRecipes);
    navigate("/");
  };

  return (
    <div className="flex bg-orange-50 pt-10 h-fit lg:h-full lg:py-10 lg:px-4 lg:ml-64 xl:ml-64">
      <div
        className={`flex flex-col w-full bg-white rounded-lg p-3 h-fit md:mx-4 md:p-6 sm:transition-transform ${
          isClosing ? "animate-slide-down" : "animate-slide-up"
        }`}
      >
        {/* Header */}
        <div className="mb-6 flex flex-row justify-end">
          <img
            src={close}
            alt="Close icon"
            className="cursor-pointer"
            onClick={handleClose}
          />
        </div>

        {currentRecipe.image?.length > 0 && (
          <img
            src={currentRecipe.image[0]}
            className="card-single-recipe-img"
            alt={currentRecipe.title}
          />
        )}

        <p className="my-6 font-bold text-4xl md:text-5xl lg:text-[6xl]">
          {currentRecipe.title}
        </p>

        {/* Ingredients & Directions */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Ingredients */}
          <div className="rounded-xl bg-amber-50 p-4 w-full lg:w-auto lg:min-w-xs lg:max-w-md xl:min-w-lg lg:h-fit">
            <div className="font-bold pb-4">Ingredients</div>
            <ul className="list-none list-inside">
              {currentRecipe.ingredients.map((item, index) => (
                <li key={index} className="mb-1 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Directions */}
          <div className="rounded-xl bg-orange-100 p-4 w-full lg:h-fit">
            <div className="font-bold pb-4">Directions</div>
            <ol className="list-decimal list-inside">
              {currentRecipe.directions.map((step, index) => (
                <li key={index} className="mb-2 text-lg">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex gap-4 justify-end mt-8">
          <button
            className="btn-sm-delete"
            onClick={() => deleteRecipe(currentRecipe.id)}
          >
            Delete
          </button>
          <button className="btn-sm">Edit</button>
        </div>
      </div>
    </div>
  );
}
