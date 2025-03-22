import { useState } from 'react';
import close from "../assets/close.svg";
import { Button } from '/src/components/Button';

export function RecipeForm({ recipes, setRecipes }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");

  
  const addRecipe = () => {

    // Create a new recipe object.
    const newRecipe = {
      id: recipes.length + 1,
      title: title,
      ingredients: ingredients,
      directions: directions,
      image: [] 
    };

    // Update local state
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);


    console.log("button worked")
  };

  return (
    <div className="p-10 bg-orange-50 h-full">
      <div className="bg-white my-10 p-6 rounded-lg ml-64">
        {/* Header */}
        <div className="flex flex-row justify-between items-start w-full">
          <h1 className="mb-6 font-bold">Add your recipe</h1>
          <img src={close} alt="Close icon" />
        </div>

        <div className="flex flex-col gap-6">
          {/* Title */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="flex flex-row justify-between items-center">
              <div className="form-title font-bold text-xl">Title</div>
            </div>
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
            <div className="flex flex-row justify-between items-center">
              <div className="form-title font-bold text-xl">Ingredients</div>
            </div>
            <textarea 
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4" 
              placeholder="Write your ingredients here (separated by commas)..." 
            />
          </div>

          {/* Directions */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="flex flex-row justify-between items-center">
              <div className="form-title font-bold text-xl">Directions</div>
            </div>
            <textarea 
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4" 
              placeholder="Write your directions here (separate steps with periods)..." 
            />
          </div>

          {/* Button triggers addRecipe on click */}
          <Button onClick={addRecipe} text="Add Recipe" />
        </div>
      </div>
    </div>
  );
}
