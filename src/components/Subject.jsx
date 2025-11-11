import { useContext } from "react"
import { SUbject } from "./Context/ThemeContext"

export const Subject = () => {
  const a= useContext(SUbject)
  return (
    <div className="bg-green-200">
    <p>Subject: {a}</p></div>
  )
}
