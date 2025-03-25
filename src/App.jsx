import './App.css';
import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './pages/MainContent';
import { Recipe } from './pages/Recipe';
import { About } from './pages/About';
import { PageNotFound } from './pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import recipesData from './recipes.json';
import { RecipeForm } from './pages/RecipeForm';
import { MobileMenu } from './components/MobileMenu';
import { EditRecipe } from "./pages/EditRecipe"; // import the new page


function App() {
  // State to hold all recipes
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <>
      {/* Sidebar for large screens */}
      <Sidebar />

      {/* Mobile navigation menu for small screens */}
      <MobileMenu />

      {/* Route configuration */}
      <Routes>
        {/* Home page: list of recipe cards */}
        <Route path="/" element={<MainContent recipes={recipes} />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Recipe detail page */}
        <Route
          path="/recipe/:id"
          element={<Recipe recipes={recipes} setRecipes={setRecipes} />}
        />

        {/* Recipe creation form */}
        <Route
          path="/recipeform"
          element={<RecipeForm recipes={recipes} setRecipes={setRecipes} />}
        />

        {/* Recipe edit form */}
        <Route
          path="/edit/:id"
          element={<EditRecipe recipes={recipes} setRecipes={setRecipes} />}
        />

        {/* Fallback for unmatched routes */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
