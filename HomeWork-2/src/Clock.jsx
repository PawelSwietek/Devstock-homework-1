import { useEffect, useState } from "react";
import "./index.css";
function Clock({ timeZone, removeItem }) {
  const [time, setTime] = useState(calculateTime(timeZone));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime(timeZone));
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  function calculateTime(utc) {
    return new Date(Date.now() + utc * 60 * 60 * 1000);
  }

  function pad(item) {
    return String(item).padStart(2, "0");
  }

  return (
    <>
      <div className="m-3 flex flex-wrap">
        <div className=" border-t-orange-500 border-b-orange-900 border-t-4 border-b-4 relative flex  max-h-14 items-center justify-center bg-gray-800 text-white px-14 py-8 text-3xl rounded-tl rounded-br rounded-bl ">
          <div>
            {pad(time.getHours())}:{pad(time.getMinutes())}:{pad(time.getSeconds())}
          </div>
          <span className="text-xs text-gray-400 absolute right-0 bottom-0 m-1">
            UTC {timeZone > 0 ? `+${timeZone}` : timeZone}
          </span>
          <span className="absolute top-0 left-0 text-xs m-1">{time.getMilliseconds()}</span>
        </div>
        <div
          onClick={() => removeItem(timeZone)}
          className="bg-orange-500 rounded-tr rounded-br h-fit p-1 flex cursor-pointer justify-center items-center text-red-900 font-bold text-xs"
        >
          X
        </div>
      </div>
    </>
  );
}

export default Clock;
