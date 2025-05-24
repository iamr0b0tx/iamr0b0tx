import React, { useEffect, useState } from "react";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsLoaded(true);
  }, []);

  const text = "SOFTWARE ENGINEER";
  const name = "Abdulfatah Adeneye".split("");

  return (
    <div className="my-12 ">
      <section className="mx-4 px-2 xl:px-4 py-6 flex flex-col justify-between border-b-2 border-green-800/60">
        <h2
          className={`text-6xl  xl:text-[100px] max-w-xl md:max-w-2xl xl:max-w-2xl font-bold  xl:tracking-wider break-words`}
        >
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className={`inline-block text-white transform transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${index * 0.05}s`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h2>
        <h3
          className="flex mt-8 justify-end text-2xl xl:text-3xl font-medium text-gray-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {name.map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-300 ${
                isHovered ? "text-green-400" : "text-gray-300"
              }`}
              style={{
                transitionDelay: `${index * 0.05}s`,
                transform: isHovered ? "translateY(-3px)" : "translateY(0)",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h3>
      </section>
      <section className="px-2 mx-4 xl:px-4 py-6 grid xl:grid-cols-2 ">
        <h4 className="text-2xl xl:text-3xl font-medium text-white">
          Scalable web solutions
        </h4>
        <p className="my-4 xl:my-10 flex justify-end text-gray-400 xl:text-lg leading-relaxed ">
          Problem-solver driven by a passion for building scalable, secure
          systems. Expertise in server-side development, with a focus on APIs
          and data management — pushing boundaries behind the scenes.
        </p>
      </section>
    </div>
  );
}

export default Hero;
