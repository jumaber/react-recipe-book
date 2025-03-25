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

function App() {
  // State to hold all recipes
  const [recipes, setRecipes] = useState(() => {
    // Load from localStorage if available, otherwise use initial JSON
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : recipesData;
  });

  // Save recipes to localStorage every time they change
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

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
        <Route path="/recipe/:id" element={<Recipe recipes={recipes} setRecipes={setRecipes} />} />

        {/* Recipe creation form */}
        <Route path="/recipeform" element={<RecipeForm recipes={recipes} setRecipes={setRecipes} />} />

        {/* Fallback for unmatched routes */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
