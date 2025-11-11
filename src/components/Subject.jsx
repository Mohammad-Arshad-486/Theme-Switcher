import { useContext } from "react"
import { SUbject } from "./Context/ThemeContext"
import { Theme } from "./Context/ThemeContext";


export const Subject = () => {
  
    const { value } = useContext(Theme);
    const isDark = value === "Dark";
  const a= useContext(SUbject)
  return (
    <div className={`${isDark ? "bg-green-900" :"bg-green-200"}`}>
    <p>Subject: {a}</p></div>
  )
}
