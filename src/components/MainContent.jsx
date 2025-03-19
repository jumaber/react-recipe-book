import { Card } from '/src/components/Card';
import { Button } from '/src/components/Button';


export function MainContent (){
   return (
    <>
      <div className="flex flex-row gap-4 align-start justify-between">
        <div className="flex flex-col">
          <p className="font-black pb-4 text-6xl">Hungry?</p>
          <p className="text-lg">Discover fresh, flavorful recipes that make every meal peachy.</p>
        </div>
        <Button />
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
