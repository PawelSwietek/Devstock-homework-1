function ThemeButton({ setTheme, theme }) {
  return (
    <button
      className="absolute right-0 px-12 py-6 text-xl shadow-2xl dark:bg-gray-700 dark:text-white rounded-l"
      onClick={() => setTheme((theme) => !theme)}
    >
      {theme ? "Light" : "Dark"}
    </button>
  );
}
export default ThemeButton;
