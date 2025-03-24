import { Card } from "/src/components/Card";
import { Button } from "/src/components/Button";
import { Link } from "react-router-dom";

export function MainContent({ recipes }) {
  return (
    <div className="ml-64 h-screen overflow-y-auto p-8 py-12 bg-orange-100">
      <div className="flex flex-row gap-4 items-start justify-between">
        <div className="flex flex-col">
          <p className="font-black pb-4 text-6xl">Hungry?</p>
          <p className="text-lg">
            Discover fresh, flavorful recipes that make every meal peachy.
          </p>
        </div>
        
        <Link to="/recipeform">
          <Button />
        </Link> 
      </div>

      <div className="flex flex-wrap gap-6 mt-14 w-full">
        {recipes.map(recipe => (
          <div key={recipe.id} className="card-wrapper">
            <Link to={`/recipe/${recipe.id}`} className="block w-full h-full">
              <Card recipe={recipe} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
