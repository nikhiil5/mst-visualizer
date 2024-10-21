import React, { useState } from "react";
import NavButton from "./NavButton.js";
import "./Navbar.css";

const Navbar = ({ handleNavClick, running_state }) => {
  const [pressed, setPressed] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tapped, setTapped] = useState(false);

  const handleMouseClick = () => {
    setTapped(!tapped);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClick = (event) => {
    const name = event.target.getAttribute("name");
    handleNavClick(name);
    setPressed(name);
    setDropdownOpen(!dropdownOpen);
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
      <div className="navbar-container flex flex-row justify-between items-start">
        <div className="notm flex flex-row">
          <h1 className="rounded-md lg:w-60 lg:h-12 mt-3 bg-slate-800 ml-2 lg:pt-3 px-4 border border-transparent text-center lg:text-base text-white font-mono sm:h-7 sm:w-30 sm:pt-1 md:h-8 md:w-40 md:pt-2 slct">
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

        <div className="mob relative inline-block text-left">
          <div className="btn ">
            <button
              type="button"
              className="bttn inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-sm font-semibold font-mono text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              <p className="choice">{`${pressed===""?"Select MST":pressed} Algorithm:`}</p>
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {dropdownOpen && (
            <div
              className="menu absolute right-0 z-10 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div  role="none">
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
            </div>
          )}
        </div>

        <a href="https://mst-visualizer-opal.vercel.app/" className="webname flex flex-row px-3 space-x-2 md:pr-4 lg:pr-6 lg:px-2 pt-0">
          <img src="/fav.png" alt="logo" className="mr-0 size-5 sm:mr-0 sm:size-5 md:mr-0 md:size-7 lg:size-10" />
          <p className="text-sm font-serif sm:text-base md:text-xl lg:text-4xl">MST Visualizer</p>
        </a>
      </div>
      <div className={instructionText === "" ? "" : "instr directions-container"}>
        <h3 className=" font-mono text-xs md:text-sm lg:text-base cursor-text">
          <p className=" min-[800px]:hidden infoicon">
          <img 
            className={`${pressed===""?"hidden":""} size-5`} 
            src="./information-button.png"
            alt="information"
            onClick={handleMouseClick}
          />
          </p>
          {tapped && 
            <div className="absolute right-5 top-28 z-10 w-56 p-2 bg-white border border-gray-300 rounded-lg shadow-lg">
              <p className="text-sm text-gray-700">{instructionText}</p>
            </div>
          }
        </h3>
        <h3 className="max-[800px]:hidden contents lg:contents font-mono md:text-xs lg:text-base cursor-text">
          {instructionText}
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
