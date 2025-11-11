import { useContext, useState } from "react";
import { Theme } from "./Context/ThemeContext";
import { School } from "./School";
import { SUbject } from "./Context/ThemeContext";
function Example2() {
  const { value } = useContext(Theme);
  const isDark = value === "Dark";
  const [sub, setSub]= useState("")

  return (
    <SUbject.Provider value={sub}>
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen w-full fixed top-20 left-0 flex flex-col justify-center items-center transition-colors duration-500 rounded-md`}
    >
      <h1  className={`${
    isDark ? "text-white" : "text-black"
  } text-5xl absolute top-5 left-1/2 transform -translate-x-1/2 `}>
        School&nbsp;
        <img
          className="inline w-12 h-12"
          src="/home-page-svgrepo-com.svg"
          alt="home"
        />
      </h1><p className="fixed top-50 right-30"><strong>Select Subject&nbsp;</strong>
<select className="border" onChange={(event) => setSub(event.target.value)}>
        <option value=''>Select Subject</option>
        <option value='Maths'>Maths</option>
        <option value='English'>English</option>
        <option value='Hindi'>Hindi</option>
      </select></p>
<School/>
      
    </div>
    </SUbject.Provider>
  );
}

export default Example2;