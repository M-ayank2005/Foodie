import { useDarkMode} from "@/app/DarkModeContext";


const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`w-14 h-8 flex items-center rounded-full p-1 
        ${darkMode ? 'bg-yellow-400' : 'bg-yellow-300'} 
        transition-colors duration-500 ease-in-out`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform 
          transition-transform duration-500 ease-in-out
          ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
      />
    </button>
  );
};

export default DarkModeToggle;