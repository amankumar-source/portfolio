import React, { useState, useEffect, memo } from "react";

const TEXT = "Hi, I'm Aman Kumar";

const Text = memo(function Text() {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-12 sm:h-16 md:h-20 lg:h-24 flex items-center justify-center sm:justify-start overflow-hidden">
      <h1
        className={`text-center sm:text-left
          text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl
          font-extrabold tracking-tight leading-tight whitespace-nowrap
          bg-gradient-to-r from-white via-purple-100 to-indigo-400
          bg-clip-text text-transparent
          transition-all duration-700 ease-in-out
          ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        {TEXT}
      </h1>
    </div>
  );
});

export default Text;
