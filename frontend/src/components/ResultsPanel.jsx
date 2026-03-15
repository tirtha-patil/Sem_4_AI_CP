function ResultsPanel({ algorithm, pathLength }) {

  return (

    <div className="results">

      <h3>Results</h3>

      <p><strong>Algorithm:</strong> {algorithm}</p>
      <p><strong>Path Length:</strong> {pathLength}</p>

    </div>

  );

}

export default ResultsPanel;