import { Class } from "./Class"
import { useContext } from "react";
import { Theme } from "./Context/ThemeContext";


export const School = () => {
  
    const { value } = useContext(Theme);
    const isDark = value === "Dark";
  return (
    <div className={`${isDark ? "bg-red-900" : "bg-yellow-300"} p-4 w-full`}>
      <p>SRMCEM</p>
    <Class/></div>
  )
}
