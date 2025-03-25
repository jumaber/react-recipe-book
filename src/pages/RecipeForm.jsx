import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import close from "../assets/close.svg";
import addIcon from "../assets/add.svg"

// RecipeForm component accepts recipe list and setter function as props
export function RecipeForm({ recipes, setRecipes }) {
  const [title, setTitle] = useState(""); // Title input state
  const [ingredients, setIngredients] = useState(""); // Ingredients input state (multi-line string)
  const [directions, setDirections] = useState(""); // Directions input state (multi-line string)
  const navigate = useNavigate(); // Navigation hook from React Router
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

 const uploadImageToCloudinary = async () => {
   const data = new FormData();
   data.append("file", imageFile);
   data.append("upload_preset", "recipe_book"); // Set this in Cloudinary
   const response = await fetch(
     "https://api.cloudinary.com/v1_1/jumaber/image/upload",
     {
       method: "POST",
       body: data,
     }
   );
   const result = await response.json();
   return result.secure_url;
 };


  const addRecipe = async () => {
    if (!title.trim() || !ingredients.trim() || !directions.trim()) {
      alert("Please fill in all fields. Thank you!");
      return;
    }

    let uploadedImageUrl = "";
    if (imageFile) {
      uploadedImageUrl = await uploadImageToCloudinary();
      console.log("Cloudinary URL:", uploadedImageUrl);
    }

    const newRecipe = {
      id: crypto.randomUUID(),
      title,
      ingredients: ingredients.split("\n").map((i) => i.trim()),
      directions: directions
        .split("\n")
        .map((d) => d.trim())
        .filter(Boolean),
      image: uploadedImageUrl ? [uploadedImageUrl] : [],
    };

    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);

    // Reset form
    setTitle("");
    setIngredients("");
    setDirections("");
    setImageFile(null);

    navigate(`/recipe/${newRecipe.id}`);
  };



  return (
    <div className="flex bg-orange-50 pt-10 h-fit lg:h-full lg:py-10 lg:px-4 lg:ml-64 xl:ml-64 items-end lg:justify-center lg:items-center">
      <div className="flex flex-col bg-white rounded-lg w-full p-3 max-h-fit md:mx-4 md:px-6 xl:w-4xl animate-slide-up sm:animate-slide-up sm:transition-transform">
        {/* Header */}
        <div className="flex flex-row justify-between items-start">
          <p className="mb-6 font-bold text-4xl md:text-5xl lg:text-[6xl]">
            Add your recipe
          </p>
          <img
            src={close}
            alt="Close icon"
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="flex flex-col gap-6">
          {/* Title input */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Title</div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[48px] p-4 mt-4"
              placeholder="Write your title here..."
            />
          </div>

          {/* Ingredients textarea */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Ingredients</div>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4"
              placeholder="Split your ingredients by lines here..."
            />
          </div>

          {/* Directions textarea */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Directions</div>
            <textarea
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4"
              placeholder="Split your directions by lines here..."
            />
          </div>

          {/* Upload Image */}
          <div className="form-container flex flex-row w-full bg-orange-200 rounded-lg p-4 justify-between items-center">
            <div className="form-title font-bold text-xl mr-6">Image</div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="input-field bg-white rounded-lg p-2 w-full"
              placeholder="Select your image..."
            />          
            </div>

          {/* Submit button */}
          <button className="btn pb-6" onClick={addRecipe}>
            <img src={addIcon} className="mr-2" />
            Add Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

