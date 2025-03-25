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
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : recipesData;
  });



  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <>
      <Sidebar />
      <MobileMenu />
  
      <Routes>
        <Route path="/" element={<MainContent recipes={recipes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:id" element={<Recipe recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="/recipeform" element={<RecipeForm recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
