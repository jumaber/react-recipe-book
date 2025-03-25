export function Card({ recipe }) {
  return (
    <div className="card">
      {/* If the recipe has an image, display it */}
      {recipe.image?.[0] ? (
        <img
          src={recipe.image[0]}         // First image in the array
          className="card-img"          
          alt={recipe.title}            
        />
      ) : (
        // Fallback placeholder if no image exists
        <div className="card-img bg-blue-50 flex items-center justify-center text-teal-950 font-bold text-2xl" />
      )}

      {/* Display the recipe title */}
      <h3 className="card-title">{recipe.title}</h3>
    </div>
  );
}
