// import React from "react";
// import { useState, useEffect } from "react";
// const Text = () => {
//   const texts = ["Hello! I am Aman Kumar", "Hello! I am Aman Kumar", "Hello! I am Aman Kumar"];
//   const [currenText, setCurrentText] = useState("");
//   const [endValue, setendValue] = useState(true);
//   const [isForward, setIsForward] = useState(true);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentText(texts[index].substring(0, endValue));
//       if (isForward) {
//         setendValue((prev) => prev + 1);
//       } else {
//         setendValue((prev) => prev - 1);
//       }
//       if (endValue > texts[index].length + 10) {
//         setIsForward(false);
//       }
//       if (endValue < 2.1) {
//         setIsForward(true);
//         setIndex((prev) => prev & texts.length);
//       }
//     }, 50);

//     return () => clearInterval(intervalId);
//   }, [endValue, isForward, index, texts]);

//   return <div className="transition ease duration-300">{currenText}</div>;
// };

// export default Text;


// import React, { useState, useEffect } from "react";

// const Text = () => {
//   const texts = ["Hello, I’m Aman Kumar"];
//   const [currentText, setCurrentText] = useState("");
//   const [endValue, setEndValue] = useState(0);
//   const [isForward, setIsForward] = useState(true);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentText(texts[index].substring(0, endValue));

//       if (isForward) {
//         setEndValue((prev) => prev + 1);
//       } else {
//         setEndValue((prev) => prev - 1);
//       }

//       if (endValue > texts[index].length + 5) {
//         setIsForward(false);
//       }
//       if (endValue < 0) {
//         setIsForward(true);
//         setIndex((prev) => (prev + 1) % texts.length);
//       }
//     }, 120);

//     return () => clearInterval(intervalId);
//   }, [endValue, isForward, index, texts]);

//   return (
//     <h1 className="transition ease duration-300 text-2xl md:text-6xl font-bold text-white">
//       {currentText}
//       <span className="animate-pulse">|</span> {/* blinking cursor */}
//     </h1>
//   );
// };

// export default Text;


import React, { useState, useEffect } from "react";

const Text = () => {
  const texts = [
    "Hi, I’m Aman Kumar"
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true); // fade in
      }, 500); // wait for fade-out before switching text
    }, 3000); // change every 3s

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <h1
      className={`text-center transition-all duration-700 text-2xl md:text-6xl font-extrabold tracking-wide 
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent
        ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
    >
      {texts[index]}
    </h1>
  );
};

export default Text;
