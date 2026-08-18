import React, { useState, useEffect, memo } from "react";

// Performance: texts array is OUTSIDE the component.
// Previously inside the function body — meaning a new array was allocated on EVERY render.
// Outside = created once, shared reference, zero allocation cost per render.
const TEXTS = [
  "Hi, I'm Aman Kumar",
  "Full-Stack Web Developer",
  "MERN Stack & Java Engineer",
];

// React.memo: Text only re-renders when its own state (fade/index) changes,
// not when Home re-renders (e.g. on CV modal open/close).
const Text = memo(function Text() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % TEXTS.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(intervalId);
    // TEXTS.length is a compile-time constant — safe, no stale closure risk
  }, []);

  return (
    <h1
      className={`text-center sm:text-left
        transition-all duration-700
        text-3xl sm:text-5xl md:text-6xl
        font-extrabold tracking-wide
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
        bg-clip-text text-transparent
        ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
    >
      {TEXTS[index]}
    </h1>
  );
});

export default Text;
