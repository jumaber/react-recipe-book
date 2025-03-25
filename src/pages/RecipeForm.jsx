import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import close from "../assets/close.svg";
import addIcon from "../assets/add.svg"

export function RecipeForm({ recipes, setRecipes }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const navigate = useNavigate();

  const addRecipe = () => {
    if (!title.trim() || !ingredients.trim() || !directions.trim()) {
      alert("Please fill in all fields. Thank you!");
      return;
    }

    const newRecipe = {
      id: crypto.randomUUID(), // substituted by recipe.length +1, so that if a recipe is deleted, there are no problems with the new IDs
      title,
      ingredients: ingredients.split("\n").map(i => i.trim()), //each line is the delimiter
      directions: directions.split("\n").map(d => d.trim()).filter(Boolean), //each line is the delimiter
      image: []  // Placeholder for later
    };

    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);

    // Reset form fields
    setTitle("");
    setIngredients("");
    setDirections("");

    // Go back to homepage
    navigate(`/recipe/${newRecipe.id}`);
  };

  return (
    <div className="flex bg-orange-50 pt-10 h-fit lg:py-10 lg:px-4 lg:ml-64 xl:ml-64 items-end lg:justify-center lg:items-center">
      <div className="flex flex-col bg-white rounded-lg w-full p-3 max-h-fit md:mx-4 md:px-6 xl:w-4xl animate-slide-up sm:animate-slide-up sm:transition-transform">
        <div className="flex flex-row justify-between items-start">
          <p className="mb-6 font-bold text-4xl md:text-5xl lg:text-[6xl]">Add your recipe</p>
          <img src={close} alt="Close icon" className="cursor-pointer" onClick={() => navigate("/")} />
        </div>

        <div className="flex flex-col gap-6">
          {/* Title */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Title</div>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[48px] p-4 mt-4" 
              placeholder="Write your title here..." 
            />
          </div>

          {/* Ingredients */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Ingredients</div>
            <textarea 
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4" 
              placeholder="Write your ingredients here (separated by commas)..." 
            />
          </div>

          {/* Directions */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Directions</div>
            <textarea 
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4" 
              placeholder="Write your directions here (separate steps with periods)..." 
            />
          </div>

          <button className="btn pb-6" onClick={addRecipe}>
            <img src={addIcon} className="mr-2" />
            Add Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
