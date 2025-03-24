export function Card({ recipe }) {
  return (
    <div className="card h-full">
      <img
        src={recipe.image[0]}
        className="card-img"
        alt={recipe.title}
      />
      <h3 className="card-title">{recipe.title}</h3>
    </div>
  );
}
