import { Link } from "react-router-dom";
import broccoliImg from "../assets/broccoli.svg";

export function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen lg:ml-64 p-4 bg-orange-100 text-center">
      <h1 className="text-5xl font-black mb-4 text-teal-950">
        404: Broccoli not found.
      </h1>
      <p className="text-xl mb-10 text-teal-800">
        Don’t worry, most people avoid it anyway.
      </p>

      {/* Sneaky Broccoli */}
      <img
        src={broccoliImg}
        alt="Broccoli sneaking away"
        className="w-64 animate-sneak opacity-80"
      />

      <Link to="/" className="btn-sm mt-12">
        <p className="hover:text-white focus:text-white active:text-white">
          Go back to tastier things
        </p>
      </Link>
    </div>
  );
}
