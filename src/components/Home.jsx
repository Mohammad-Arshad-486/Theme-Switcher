import { useContext } from "react";
import { Theme } from "./Context/ThemeContext";

function Home() {
  const { value } = useContext(Theme);
  const isDark = value === "Dark";

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen w-full fixed top-20 left-0 flex flex-col justify-center items-center transition-colors duration-500 rounded-md`}
    >
      <h1  className={`${
    isDark ? "text-white" : "text-black"
  } text-5xl absolute top-5 left-1/2 transform -translate-x-1/2 `}>
        Home&nbsp;
        <img
          className="inline w-12 h-12"
          src="/home-page-svgrepo-com.svg"
          alt="home"
        />
      </h1>

      <p className="text-2xl mb-4">Context API Example</p>
      <p className="text-xl">Current Theme: {value}</p>
    </div>
  );
}

export default Home;
