import { useState } from "react";
import Clock from "./Clock";
import { ClockList } from "./ClockList";
function App() {
  const [UTCList, setUTCList] = useState([]);

  const UTCS = [
    "-12",
    "-11",
    "-10",
    "-09",
    "-08",
    "-07",
    "-06",
    "-05",
    "-04",
    "-03",
    "-02",
    "-01",
    " 00",
    "+01",
    "+02",
    "+03",
    "+04",
    "+05",
    "+06",
    "+07",
    "+08",
    "+09",
    "+10",
    "+11",
    "+12",
    "+13",
    "+14",
  ];

  function clickHandler(e) {
    if (e.target.tagName === "LI") {
      setUTCList((UTCList) => {
        const idNumber = Number(e.target.id);
        if (!UTCList.includes(idNumber)) {
          return [...UTCList, idNumber];
        }
        return UTCList;
      });
    }
  }

  function removeItem(item) {
    setUTCList((UTC) => UTC.filter((UTC) => UTC !== item));
  }

  return (
    <div className="flex">
      <div className=" top-0 left-0 bg-gray-800 text-white h-fill ">
        <ul className="space-y-1" onClick={clickHandler}>
          {UTCS.map((UTC) => (
            <li className="hover:bg-slate-900 cursor-pointer px-4" key={UTC} id={UTC}>
              UTC{UTC}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap justify-center h-fit">
        <ClockList timeZoneList={UTCList} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;
