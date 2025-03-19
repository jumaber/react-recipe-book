import add from "../assets/add.svg";
import { Card } from '/src/components/Card';

export function MainContent (){
   return (
    <>
      <div className="flex flex-row gap-4 align-start justify-between">
        <div className="flex flex-col">
          <h1 className="font-black pb-4">Hungry?</h1>
          <p className="text-lg">Discover fresh, flavorful recipes that make every meal peachy.</p>
        </div>
          <a href="#" className="btn"><img src={add} className="mr-2"/>Add Recipe</a>
      </div>
      <div className="flex flex-row justify-between flex-wrap gap-6 mt-14 ">
        <Card />
        <Card />
        <Card />
        <Card /> 
        <Card />
        <Card />
        <Card />
        <Card /> 
      </div>
    </>
    )
  }
