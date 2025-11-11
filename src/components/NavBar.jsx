import { Link } from "react-router-dom";
import { useContext } from "react";
import { Theme } from "./Context/ThemeContext";

function NavBar() {
  const { value, toggle } = useContext(Theme);

  return (
    <div className={`${value==='Dark' ? "bg-gray-500 text-white p-5 fixed top-0 left-0 w-full flex justify-between items-center rounded-md" : "bg-gray-300 text-black p-5 fixed top-0 left-0 w-full flex justify-between items-center rounded-md"}`}>
      <div>
        <span className="text-2xl font-bold">Theme Switcher</span>
        <Link to="/" className={`${value==='Dark' ? "text-white" : "text-Black"}  ml-6 no-underline `}>
          Home
        </Link>
        <Link to="/example2" className={`${value==='Dark' ? "text-white" : "text-Black"}  ml-6 no-underline `}>
          Example 2
        </Link>
      </div>
      <button
        className={`${value==='Dark' ? "bg-black text-white" : "color-white bg-white text-black "} px-4 py-2 rounded-md hover:bg-gray-600 transition`}
        onClick={toggle}
      >
        {value}
      </button>
    </div>
  );
}

export default NavBar;
