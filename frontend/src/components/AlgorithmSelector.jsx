function AlgorithmSelector({ algorithm, setAlgorithm }) {

  return (

    <div className="selector">

      <label>Select Algorithm: </label>

      <select
        value={algorithm}
        onChange={(e)=>setAlgorithm(e.target.value)}
      >

        <option value="BFS">BFS</option>
        <option value="DFS">DFS</option>
        <option value="A*">A*</option>

      </select>

    </div>

  );

}

export default AlgorithmSelector;