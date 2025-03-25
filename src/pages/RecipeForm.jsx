import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import close from "../assets/close.svg";
import addIcon from "../assets/add.svg"

// RecipeForm component accepts recipe list and setter function as props
export function RecipeForm({ recipes, setRecipes }) {
  const [title, setTitle] = useState(""); // Title input state
  const [ingredients, setIngredients] = useState(""); // Ingredients input state (multi-line string)
  const [directions, setDirections] = useState(""); // Directions input state (multi-line string)
  const navigate = useNavigate(); // Navigation hook from React Router

  const addRecipe = () => {
    // Basic validation: no empty fields allowed
    if (!title.trim() || !ingredients.trim() || !directions.trim()) {
      alert("Please fill in all fields. Thank you!");
      return;
    }

    const newRecipe = {
      id: crypto.randomUUID(), // Generate a unique ID for the recipe
      title,
      ingredients: ingredients.split("\n").map(i => i.trim()), // Split ingredients by line, trim whitespace
      directions: directions.split("\n").map(d => d.trim()).filter(Boolean), // Same for directions; filter out empty lines
      image: []  // Placeholder for image array (empty for now)
    };

    // Update the recipes array with the new recipe
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);

    // Reset form inputs
    setTitle("");
    setIngredients("");
    setDirections("");

    // Navigate to the newly created recipe page
    navigate(`/recipe/${newRecipe.id}`);
  };

  return (
    <div className="flex bg-orange-50 pt-10 h-fit lg:py-10 lg:px-4 lg:ml-64 xl:ml-64 items-end lg:justify-center lg:items-center">
      <div className="flex flex-col bg-white rounded-lg w-full p-3 max-h-fit md:mx-4 md:px-6 xl:w-4xl animate-slide-up sm:animate-slide-up sm:transition-transform">
        
        {/* Header */}
        <div className="flex flex-row justify-between items-start">
          <p className="mb-6 font-bold text-4xl md:text-5xl lg:text-[6xl]">Add your recipe</p>
          <img src={close} alt="Close icon" className="cursor-pointer" onClick={() => navigate("/")} />
        </div>

        <div className="flex flex-col gap-6">
          
          {/* Title input */}
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

          {/* Ingredients textarea */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Ingredients</div>
            <textarea 
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4" 
              placeholder="Split your ingredients by lines here..." 
            />
          </div>

          {/* Directions textarea */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Directions</div>
            <textarea 
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4" 
              placeholder="Split your directions by lines here..." 
            />
          </div>

          {/* Submit button */}
          <button className="btn pb-6" onClick={addRecipe}>
            <img src={addIcon} className="mr-2" />
            Add Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
