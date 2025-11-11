import { Subject } from './Subject'
import { useContext } from "react";
import { Theme } from "./Context/ThemeContext";

export const Class = () => {
    const { value } = useContext(Theme);
    const isDark = value === "Dark";
  return (
    <div className={`${isDark ? 'bg-blue-900' : 'bg-blue-300'}`}>
    <p >Class</p>
    <Subject/></div>
  )
}
