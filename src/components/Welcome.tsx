import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col bg-slate-900 w-full py-8 bg-dot-white/[0.2]">
      <h1
        className="font-bold text-center text-8xl bg-gradient-to-r from-teal-600 via-blue-600 to-fuchsia-500 bg-clip-text text-transparent"
        style={{
          filter: "drop-shadow(0 10px 10px rgba(0,0,0,1.5))",
        }}
      >
        John Dunn
      </h1>
      <h3
        className="pt-5 italic text-center text-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent"
        style={{
          filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.4))",
        }}
      >
        Software Engineer
      </h3>
    </div>
  );
};

export default Welcome;
