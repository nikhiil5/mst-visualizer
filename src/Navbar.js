import React, { useState } from "react";
import NavButton from "./NavButton.js";
import "./Navbar.css";

const Navbar = ({ handleNavClick, running_state }) => {
  const [pressed, setPressed] = useState("");

  const handleClick = (event) => {
    const name = event.target.getAttribute("name");
    handleNavClick(name);
    setPressed(name);
  };

  let instructionText = "";
  if (running_state === "Running") {
    instructionText = `Simulating ${pressed} Algorithm...`;
  } else if (running_state === "Waiting") {
    instructionText = "Algorithm Finished! Minimum Spanning Tree generated.";
  } else if (pressed !== "") {
    instructionText = "Create your graph below. Double click below to place a Node.";
  }

  return (
    <div>
      <div className="navbar-container  flex flex-row justify-between items-start">
          <div className="flex flex-row " >
            <h1 className="rounded-md w-60 h-12 mt-3 bg-slate-800 ml-2 pt-3 px-4 border border-transparent text-center text-base text-white font-mono slct">
              Select MST Algorithm:
            </h1>
            <NavButton
              pressed={pressed}
              name="Kruskal's"
              text="Kruskal's Algorithm"
              handleClick={handleClick}
            />
            <NavButton
              pressed={pressed}
              name="Prim's"
              text="Prim's Algorithm"
              handleClick={handleClick}
            /> 
          </div>
          <a href="https://mst-visualizer-opal.vercel.app/" className="webname flex flex-row space-x-2 text-4xl font-serif pr-6 px-2 pt-2">
            <img src="/fav.png" alt="logo" className="mr-2 size-10"></img>
            MST Visualizer
          </a>
      </div>
      <div className={instructionText===""?"":"instr directions-container"}>
        <h3 className="cursor-text">{instructionText}</h3>
      </div>
    </div>
  );
};

export default Navbar;
