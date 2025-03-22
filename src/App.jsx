import './App.css';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './pages/MainContent';
import { Recipe } from './pages/Recipe';
import { About } from './pages/About';
import { PageNotFound } from './pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import recipesData from './recipes.json';
import { RecipeForm } from './pages/RecipeForm';

function App() {
  return (
    <>
      <Sidebar />
  
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:id" element={<Recipe recipe={recipesData} />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/recipeform" element={<RecipeForm/>} />  
      </Routes>
    </>
  );
}

export default App;
