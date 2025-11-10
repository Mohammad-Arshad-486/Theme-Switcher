import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Theme } from "./components/Context/ThemeContext";

const RootLayout = () => (
  <div className="App">
    <NavBar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  const [value, setValue] = useState("Light");

  const toggle = () => {
    const updatedValue = value === "Light" ? "Dark" : "Light";
    setValue(updatedValue);
  };

  return (
    <Theme.Provider value={{ value, toggle }}>
      <RouterProvider router={router} />
    </Theme.Provider>
  );
}

export default App;
