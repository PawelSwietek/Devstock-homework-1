import { useState } from "react";

const TabList = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div className="rounded-b shadow-xl w-1/2 flex flex-col">
      <div className="flex w-full justify-between">
        {children.map((child) => (
          <div
            className={`${child.props.label === activeTab ? "bg-gray-500" : "bg-gray-600"} p-4  text-white w-full text-3xl`}
            key={child.props.label}
            onClick={() => setActiveTab(child.props.label)}
          >
            {child.props.label}
          </div>
        ))}
      </div>
      <div className="p-4 text-xl text-justify bg-slate-200 dark:bg-slate-500">
        {children.map((child) => child.props.label === activeTab && child)}
      </div>
    </div>
  );
};

export default TabList;
