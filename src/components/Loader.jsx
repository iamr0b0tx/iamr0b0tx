import { useEffect, useState } from "react";

const Loader = () => {
  const lines = [
    ["Initializing", <span className="text-green-400"> API</span>, "routes..."],
    ["Connecting", "to", <span className="text-green-400">database...</span>],
    ["Authenticating", <span className="text-green-400">request...</span>],
    ["Compiling", <span className="text-green-400">server</span>, "modules..."],
    ["Status:", <span className="text-green-400">200 OK</span>],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < lines.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 1000); // Adjust speed here
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="container m-auto font-space-mono  flex items-center justify-center min-h-screen px-4">
      <div className="text-lg">
        <div className="space-x-1 text-center">
          {lines[currentIndex].map((word, idx) => (
            <span key={idx}>{word} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
