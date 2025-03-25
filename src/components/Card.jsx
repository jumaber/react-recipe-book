export function Card({ recipe }) {

  return (
    <div className="card h-full">
      {recipe.image?.[0] ? (
        <img
          src={recipe.image[0]}
          className="card-img"
          alt={recipe.title}
        />
      ) : (
        <div className={`card-img bg-blue-50 flex items-center justify-center text-teal-950 font-bold text-2xl`} />
      )}

      <h3 className="card-title">{recipe.title}</h3>
    </div>
  );
}
