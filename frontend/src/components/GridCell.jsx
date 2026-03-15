function GridCell({ type, isVisited, isPath }) {

  let className = "cell";

  if(type==="X") className+=" obstacle";
  else if(type==="S") className+=" goal";
  else className+=" empty";

  if(isVisited) className+=" visited";
  if(isPath) className+=" path";

  return(

    <div className={className}>

      {type==="R" && (
        <img
          src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png"
          className="rover-icon"
          alt="rover"
        />
      )}

    </div>

  );

}

export default GridCell;