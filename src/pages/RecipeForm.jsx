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
      alert("Please fill in all fields.");
      return;
    }

    const newRecipe = {
      id: recipes.length + 1,
      title,
      ingredients: ingredients.split(",").map(i => i.trim()),
      directions: directions.split(".").map(d => d.trim()).filter(Boolean),
      image: []  // Or add a placeholder image URL
    };

    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);

    // Reset form fields
    setTitle("");
    setIngredients("");
    setDirections("");

    // Go back to homepage
    navigate("/");
  };

  return (
    <div className="bg-orange-50 h-full py-10 sm:px-4 md:px-10 lg:px-80">
      <div className="bg-white my-10 p-6 rounded-lg ml-64">
        <div className="flex flex-row justify-between items-start w-full">
          <h1 className="mb-6 font-bold">Add your recipe</h1>
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

          <button className="btn" onClick={addRecipe}>
            <img src={addIcon} className="mr-2" />
            Add Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
