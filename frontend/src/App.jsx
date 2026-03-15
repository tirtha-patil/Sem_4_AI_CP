import { useState } from "react";
import AlgorithmSelector from "./components/AlgorithmSelector.jsx";
import Grid from "./components/Grid.jsx";
import RunButton from "./components/RoverButton.jsx";
import ResultsPanel from "./components/ResultsPanel.jsx";

function App() {

  const [algorithm,setAlgorithm] = useState("BFS");
  const [path,setPath] = useState([]);
  const [visited,setVisited] = useState([]);
  const [pathLength,setPathLength] = useState(0);
  const [speed,setSpeed] = useState(500);

  const runRover = async () => {

    try{

      const response = await fetch(
        `http://localhost:8000/run?algorithm=${algorithm}`
      );

      const data = await response.json();

      setVisited(data.visited || []);
      setPath(data.path);
      setPathLength(data.path.length);

    }
    catch(error){

      alert("Backend not running");

    }

  };

  return(

    <div className="container">

      <div className="left-panel">

        <h1>🚀 Mars Rover AI Navigation</h1>

        <AlgorithmSelector
          algorithm={algorithm}
          setAlgorithm={setAlgorithm}
        />

        <div className="speed-control">

          <label>Algorithm Speed</label>

          <input
            type="range"
            min="100"
            max="1000"
            step="100"
            value={speed}
            onChange={(e)=>setSpeed(e.target.value)}
          />

        </div>

        <Grid
          path={path}
          visited={visited}
          speed={speed}
        />

        <RunButton runRover={runRover}/>

        <ResultsPanel
          algorithm={algorithm}
          pathLength={pathLength}
        />

      </div>

    </div>

  );

}

export default App;