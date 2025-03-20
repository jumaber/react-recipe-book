import close from "../assets/close.svg";

export function Recipe() {
  return (
    <div className=" flex flex-col w-full bg-white my-10 p-6 rounded-lg">
      {/* Header */}
      <div className="mb-6 flex flex-row justify-end">
        <img src={close} alt="Close icon" />
      </div>
      <img
        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="card-img"
      />
      <h1 className="my-6 font-bold">Add your recipe</h1>

      {/* Ingredients & Directions*/}
      <div className="flex gap-6">
        {/* Ingredients*/}
        <div className="flex flex-col rounded-xl bg-amber-50 p-4 min-w-3xs max-h-max">
          <div className="font-bold pb-4 ">Ingredients</div>
          <ol className="list-none text-base/9">
            <li>4 eggs</li>
            <li>125 ml vegetable oil</li>
            <li>1 tsp mustard</li>
            <li>2 tbsp lemon juice</li>
            <li>10 g chives</li>
            <li>4 tbsp broth</li>
            <li>salt</li>
            <li>pepper</li>
          </ol>
        </div>

        {/* Directions*/}
        <div className="flex flex-col rounded-xl bg-orange-100 p-4 max-h-max">
          <div className="font-bold pb-4">Directions</div>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>
              For the air fryer banana bread, start by greasing the loaf pan
              with a little butter. In a large <br />
              bowl, mash half the bananas with a fork, add butter and sugar and
              beat with a hand mixer <br />
              until creamy. Gradually add eggs and mix until smooth.
            </li>
            <li>
              For the air fryer banana bread, start by greasing the loaf pan
              with a little butter. In a large <br />
              bowl, mash half the bananas with a fork, add butter and sugar and
              beat with a hand mixer <br />
              until creamy. Gradually add eggs and mix until smooth.
            </li>
            <li>
              For the air fryer banana bread, start by greasing the loaf pan
              with a little butter. In a large <br />
              bowl, mash half the bananas with a fork, add butter and sugar and
              beat with a hand mixer <br />
              until creamy. Gradually add eggs and mix until smooth.
            </li>
            <li>
              For the air fryer banana bread, start by greasing the loaf pan
              with a little butter. In a large <br />
              bowl, mash half the bananas with a fork, add butter and sugar and
              beat with a hand mixer <br />
              until creamy. Gradually add eggs and mix until smooth.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 justify-end mt-30 ">
        <button className="btn-sm-delete" onclick="saveContent()">
          Delete
        </button>
        <button className="btn-sm" onclick="saveContent()">
          Edit
        </button>
      </div>
    </div>
  );
}
