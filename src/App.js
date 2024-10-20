import React, { useState } from 'react';
import Navbar from './Navbar';
import Graph from './components/Graph';

const App = () => {
  const [displayGraph, setDisplayGraph] = useState(false);
  const [pressed, setPressed] = useState("");
  const [runningState, setRunningState] = useState("");

  const updateRunningState = (newState) => {
    setRunningState(newState);
  };

  const handleNavClick = (button) => {
    setDisplayGraph(true);
    setPressed(button);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Navbar handleNavClick={handleNavClick} running_state={runningState} />
        <Graph
          display_graph={displayGraph}
          algo_type={pressed}
          update_running_state={updateRunningState}
        />
      </div>
    </div>
  );
};

export default App;
