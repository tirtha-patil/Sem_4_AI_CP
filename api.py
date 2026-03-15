from fastapi import FastAPI, Query
from backend.environment import MarsEnvironment
from backend.agent import RoverAgent

app = FastAPI(title="Rover AI API")


@app.get("/")
def home():
    return {"message": "Rover AI Backend Running"}


@app.get("/run")
def run_rover(algorithm: str = Query(default="astar")):
    """
    Run the rover with a selected pathfinding algorithm.
    Example: /run?algorithm=astar
    """

    env = MarsEnvironment()
    agent = RoverAgent(env)

    algo = algorithm.lower()

    if algo not in ["astar", "bfs", "dfs"]:
        return {
            "error": "Invalid algorithm",
            "allowed_algorithms": ["astar", "bfs", "dfs"]
        }

    path = agent.run(algo)

    return {
        "algorithm": algo,
        "path": path,
        "path_length": len(path) if path else 0
    }