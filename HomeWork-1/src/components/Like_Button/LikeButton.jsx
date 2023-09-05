import { useState } from "react";

const LikeButton = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="flex flex-col p-6 max-w-sm justify-center">
      <span className="p-6 flex justify-center text-4xl">{counter}</span>
      <button className="bg-slate-800 p-4 text-white text-2xl rounded-lg" onClick={() => setCounter((counter) => counter + 1)}>
        Click Me!
      </button>
    </div>
  );
};

export default LikeButton;
