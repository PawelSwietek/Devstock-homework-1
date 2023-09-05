import ThemeProvider from "./ThemeProvider";

const ThemeSwitcher = () => {
  return (
    <>
      <ThemeProvider>
        <div className="flex w-full justify-center space-x-5">
          <div className="w-3/12 shadow-2xl p-6 rounded dark:bg-slate-900 ">
            <div className="dark:text-white text-slate-900 p-2 text-lg">Lorem ipsum dolor sit amet.</div>
            <div className="flex items-center text-lg font-semibold bg-slate-900 dark:bg-white rounded-3xl p-6 text-justify text-white dark:text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quidem vitae dolorum maiores tempore
              exercitationem cum totam sequi ex debitis.
            </div>
          </div>

          <div className="w-3/12 shadow-2xl p-6 rounded dark:bg-blue-900">
            <div className="dark:text-white text-slate-900 p-2 text-lg">Lorem ipsum dolor sit amet.</div>
            <div className="flex items-center text-lg font-semibold bg-blue-900 dark:bg-white rounded-3xl p-6 text-justify text-white dark:text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quidem vitae dolorum maiores tempore
              exercitationem cum totam sequi ex debitis.
            </div>
          </div>
          <div className="w-3/12 shadow-2xl p-6 rounded dark:bg-green-900">
            <div className="dark:text-white text-slate-900 p-2 text-lg">Lorem ipsum dolor sit amet.</div>
            <div className="flex items-center text-lg font-semibold bg-green-900 dark:bg-white rounded-3xl p-6 text-justify text-white dark:text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quidem vitae dolorum maiores tempore
              exercitationem cum totam sequi ex debitis.
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default ThemeSwitcher;
