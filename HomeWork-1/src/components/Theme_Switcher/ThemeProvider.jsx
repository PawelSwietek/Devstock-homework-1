import ThemeButton from "./ThemeButton";
import { useState } from "react";
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  return (
    <div className={`${theme && "dark"} w-full `}>
      <ThemeButton setTheme={setTheme} theme={theme} />
      {children}
    </div>
  );
};

export default ThemeProvider;
