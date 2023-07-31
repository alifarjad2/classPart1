import { useState } from "react";
import WhatIsComponent from "./WhatIsComponent";
import "./App.css";
import Gallery from "./FirstComponent";
import ViteApp from "./ViteApp";
import TestFarawinPackage from "./TestFarawinPackage";
import TicTokToeGame from "./TicTokToe";
import ProfilerComponent from "./ProfilerComponent";
import { ProfilerComponentDefered } from "./ProfilerComponent";
import WhatIsReact from "./WhatIsReact";
import Tests from "./Tests";

//learning

function App() {
  const [page, setPageState] = useState(localStorage.page || "home");
  const setPage = (p) => {
    setPageState((localStorage.page = p));
  };

  return (
    <>
      <h2
        style={{ position: "absolute", top: "32px", margin: 0, left: "32px" }}
      >
        🕋﷽🕋
      </h2>
      {page !== "home" && (
        <button
          style={{ position: "absolute", top: "32px", right: "32px" }}
          onClick={() => {
            setPage("home");
          }}
        >
          خانه
        </button>
      )}
      {page === "home" && (
        <>
          <h1> مقدمه </h1>

          <div className="flexContainer">
            <button
              onClick={() => {
                setPage("Vite");
              }}
            >
              1 - default vite app
            </button>{" "}
            <button
              onClick={() => {
                setPage("FarawinLibrary");
              }}
            >
              2 - FarawinLibrary
            </button>{" "}
            <button
              onClick={() => {
                setPage("TicTokToeGame");
              }}
            >
              3 - TicTokToeGame
            </button>{" "}
            <button
              onClick={() => {
                setPage("WhatIsReact");
              }}
            >
              4 - WhatIsReact
            </button>
            <button
              onClick={() => {
                setPage("Tests");
              }}
            >
              5 - Tests
            </button>
          </div>

          <h1> components are every and only thing </h1>

          <div className="flexContainer">
            <button
              onClick={() => {
                setPage("WhatIsComponent");
              }}
            >
              1- What is components?
            </button>
            <button
              onClick={() => {
                setPage("First Component");
              }}
            >
              2- First Component
            </button>{" "}
            <button
              onClick={() => {
                setPage("ProfilerComponent");
              }}
            >
              3- Profiler Component
            </button>{" "}
            <button
              onClick={() => {
                setPage("ProfilerComponentDefered");
              }}
            >
              4- ProfilerComponentDefered
            </button>
          </div>
        </>
      )}

      <div style={{ direction: "rtl" }}>
        {page === "Vite" && <ViteApp />}
        {page === "FarawinLibrary" && <TestFarawinPackage />}
        {page === "TicTokToeGame" && <TicTokToeGame />}
        {page === "WhatIsComponent" && <WhatIsComponent />}
        {page === "First Component" && <Gallery />}
        {page === "ProfilerComponent" && <ProfilerComponent />}
        {page === "ProfilerComponentDefered" && <ProfilerComponentDefered />}
        {page === "WhatIsReact" && <WhatIsReact />}
        {page === "Tests" && <Tests />}
      </div>
    </>
  );
}

export default App;
