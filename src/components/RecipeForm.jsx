import close from "../assets/close.svg";
import { ButtonSave } from '/src/components/ButtonSave';
import { Button } from '/src/components/Button';


export function RecipeForm() {

  return(
  <div className=" flex flex-col w-full bg-white my-10 p-6 rounded-lg">
    
    {/* Header */}
    <div className="flex flex-row justify-between items-start">
      <h1 className="mb-6 font-bold">Add your recipe</h1> 
      <img src={close} alt="Close icon" />
    </div>

 
    <div className="flex flex-col gap-6">
       {/* Title */}
      <div class="form-container flex flex-col w-full bg-orange-200  rounded-lg p-4">
        <div className="flex flex-row justify-between items-center">
          <div class="form-title font-bold text-xl">Title</div>
          <ButtonSave />
        </div>
        <input type="text" id="contentInput" class="input-field bg-white rounded-lg min-h-[48px] p-4 mt-4" placeholder="Write your title here..." />
      </div>

      {/* Ingredients */}
      <div class="form-container flex flex-col w-full bg-orange-200  rounded-lg p-4">
        <div className="flex flex-row justify-between items-center">
          <div class="form-title font-bold text-xl">Ingredients</div>
          <ButtonSave />
        </div>
        <textarea type="text" id="contentInput" class="input-field bg-white rounded-lg min-h-[120px] p-4 mt-4" placeholder="Write your ingredients here..." />
      </div>
      
      {/* Description */}
      <div class="form-container flex flex-col w-full bg-orange-200  rounded-lg p-4">
        <div className="flex flex-row justify-between items-center">
          <div class="form-title font-bold text-xl">Description</div>
          <ButtonSave />
        </div>
        <textarea type="text" id="contentInput" class="input-field bg-white rounded-lg min-h-[px] p-4 mt-4" placeholder="Write your recipe here..." />
      </div>

      <Button />

    </div>

  </div>
  )
}
