import { Card } from "/src/components/Card";
import { Button } from "/src/components/Button";
import { Link } from "react-router-dom";
import add from "../assets/add.svg";

export function MainContent({ recipes }) {
  return (
    <div className="h-screen overflow-y-auto px-3 pb-3 pt-10 md:px-6 md:pt-10 md:pb-3 lg:p-8 py-12 bg-orange-100 lg:ml-64">
      
      {/* Header Section */}
      <div className="flex flex-row gap-4 items-start justify-between">
        <div className="flex flex-col">
          <p className="font-black pb-4 text-6xl">Hungry?</p>
          <p className="text-lg">
            Discover fresh, flavorful recipes that make every meal peachy.
          </p>
        </div>

        {/* Add Recipe button (only visible on medium+ screens) */}
        <Link to="/recipeform" className="hidden md:flex">
          <Button />
        </Link>
      </div>

      {/* Grid of recipe cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-14 w-full">
        {recipes.map((recipe, index) => (
          <Link
            to={`/recipe/${recipe.id}`} // Clicking a card navigates to the detailed view
            key={recipe.id}
            className="card-wrapper opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${index * 100}ms`, // Stagger animation for nicer appearance
              animationFillMode: 'forwards'
            }}
          >
            <Card recipe={recipe} />
          </Link>
        ))}
      </div>
       
      {/* Floating Add button (only visible on small screens) */}
      <div className="flex w-full">
        <Link to="/recipeform" className="flex fixed left-1 justify-end w-full p-3 bottom-4 z-50 md:hidden">
          <div className="btn">
            <img src={add} className="mr-2" />
            Add Recipe
          </div>    
        </Link>
      </div>

    </div>
  );
}
