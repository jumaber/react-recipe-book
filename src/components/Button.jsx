import add from "../assets/add.svg";


export function Button() {
  return (
    <div className="btn">
      <img src={add} className="mr-2" />
      Add Recipe
    </div>
  );
}
