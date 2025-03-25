import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import close from "../assets/close.svg";
import addIcon from "../assets/add.svg";

export function EditRecipe({ recipes, setRecipes }) {
  const navigate = useNavigate();
  const location = useLocation();
  const editingRecipe = location.state?.recipe || null;

  const [title, setTitle] = useState(editingRecipe?.title || "");
  const [ingredients, setIngredients] = useState(
    editingRecipe?.ingredients?.join("\n") || ""
  );
  const [directions, setDirections] = useState(
    editingRecipe?.directions?.join("\n") || ""
  );
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(editingRecipe?.image?.[0] || "");

  const uploadImageToCloudinary = async () => {
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "recipe_book");

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

  const updateRecipe = async () => {
    if (!title.trim() || !ingredients.trim() || !directions.trim()) {
      alert("Please fill in all fields. Thank you!");
      return;
    }

    let uploadedImageUrl = imageUrl;
    if (imageFile) {
      uploadedImageUrl = await uploadImageToCloudinary();
    }

    const updatedRecipe = {
      ...editingRecipe,
      title,
      ingredients: ingredients.split("\n").map((i) => i.trim()),
      directions: directions
        .split("\n")
        .map((d) => d.trim())
        .filter(Boolean),
      image: uploadedImageUrl ? [uploadedImageUrl] : [],
    };

    const updatedRecipes = recipes.map((r) =>
      r.id === editingRecipe.id ? updatedRecipe : r
    );

    setRecipes(updatedRecipes);
    navigate(`/recipe/${updatedRecipe.id}`);
  };

  return (
    <div className="flex bg-orange-50 pt-10 h-fit lg:py-10 lg:px-4 lg:ml-64 xl:ml-64 items-end lg:justify-center lg:items-center">
      <div className="flex flex-col bg-white rounded-lg w-full p-3 max-h-fit md:mx-4 md:px-6 xl:w-4xl animate-slide-up">
        <div className="flex flex-row justify-between items-start">
          <p className="mb-6 font-bold text-4xl md:text-5xl lg:text-[6xl]">
            Edit your recipe
          </p>
          <img
            src={close}
            alt="Close icon"
            className="cursor-pointer"
            onClick={() => navigate(`/recipe/${editingRecipe.id}`)}
          />
        </div>

        <div className="flex flex-col gap-6">
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

          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Ingredients</div>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4"
              placeholder="Split your ingredients by lines here..."
            />
          </div>

          <div className="form-container flex flex-col w-full bg-orange-200 rounded-lg p-4">
            <div className="form-title font-bold text-xl">Directions</div>
            <textarea
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
              className="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4"
              placeholder="Split your directions by lines here..."
            />
          </div>

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

          <button className="btn pb-6" onClick={updateRecipe}>
            <img src={addIcon} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
