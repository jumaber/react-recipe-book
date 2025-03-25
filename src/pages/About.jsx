export function About() {
  return (
    <div className="flex bg-orange-100 pt-10 h-full lg:py-10 lg:px-4 lg:ml-64 xl:ml-64 justify-center items-center">
      <div className="flex flex-col bg-white rounded-lg w-full p-6 max-h-fit mx-4 px-8 xl:w-4xl animate-slide-up sm:animate-slide-up sm:transition-transform">
        <p className="text-4xl md:text-5xl lg:text-[6xl] font-black text-teal-950 mb-6 text-center">About this project</p>

        <p className="text-lg text-teal-800 max-w-3xl mb-10 text-center mx-auto">
          This is a front-end React project created as part of our Full-Stack Web Development studies at Ironhack.
          It’s a simple recipe book built with React, Vite, and TailwindCSS.
        </p>

        <p className="text-base text-teal-700 text-center">
          Created by Fábio Miranda and Júlia Marí Bernaus.
        </p>
      </div>
    </div>
  );
}
