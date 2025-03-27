// Import React hooks and navigation from React Router
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import images/icons used in the component
import close from "../assets/close.svg";
import addIcon from "../assets/add.svg";

// Component for the recipe form
export function RecipeForm({ recipes, setRecipes }) {
  // State variables to store form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const navigate = useNavigate(); // Hook to redirect after submission
  const [imageFile, setImageFile] = useState(null); // File selected by user
  const [imageUrl, setImageUrl] = useState(""); // Preview URL of uploaded image

  // Function to upload selected image to Cloudinary
  const uploadImageToCloudinary = async () => {
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "recipe_book");

    // Send the file to Cloudinary
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/jumaber/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    // Get the secure URL from the response
    const result = await response.json();
    return result.secure_url;
  };

  // Function to add a new recipe
  const addRecipe = async () => {
    // Validate fields before proceeding
    if (!title.trim() || !ingredients.trim() || !directions.trim()) {
      alert("Please fill in all fields. Thank you!");
      return;
    }

    // Upload image if one was selected
    let uploadedImageUrl = "";
    if (imageFile) {
      uploadedImageUrl = await uploadImageToCloudinary();
      console.log("Cloudinary URL:", uploadedImageUrl);
    }

    // Create the recipe object
    const newRecipe = {
      id: crypto.randomUUID(), // Unique ID for the recipe
      title,
      ingredients: ingredients.split("\n").map((i) => i.trim()), // Split and clean input by lines
      directions: directions
        .split("\n")
        .map((d) => d.trim())
        .filter(Boolean), // Remove empty lines
      image: uploadedImageUrl ? [uploadedImageUrl] : [], // Add image URL or keep it empty
    };

    // Update recipe list and reset the form
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);

    setTitle("");
    setIngredients("");
    setDirections("");
    setImageFile(null);

    // Redirect to the new recipe's page
    navigate(`/recipe/${newRecipe.id}`);
  };

  return (
    <div className="flex bg-orange-50 pt-10 h-fit lg:py-10 lg:px-4 lg:ml-64 xl:ml-64 items-end lg:justify-center lg:items-center">
      <div className="flex flex-col bg-white rounded-lg w-full p-3 max-h-fit md:mx-4 md:px-6 xl:w-4xl animate-slide-up sm:animate-slide-up sm:transition-transform">
        {/* Header with title and close button */}
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

        {/* Form fields */}
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

          {/* Ingredients input (textarea) */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Ingredients</div>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4"
              placeholder="Split your ingredients by lines here..."
            />
          </div>

          {/* Directions input (textarea) */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Directions</div>
            <textarea
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4"
              placeholder="Split your directions by lines here..."
            />
          </div>

          {/* Image upload */}
          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl mb-2">Image</div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImageFile(e.target.files[0]);
                setImageUrl(URL.createObjectURL(e.target.files[0]));
              }}
              className="input-field bg-white rounded-lg p-2"
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Selected"
                className="mt-4 rounded-lg max-h-60 object-cover"
              />
            )}
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
