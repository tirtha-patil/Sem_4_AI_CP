from backend.bfs import bfs
from backend.dfs import dfs
from backend.astar import astar

class RoverAgent:

    def __init__(self,env):

        self.env = env

        self.start = env.find_position("R")
        self.goal = env.find_position("S")

    def run(self,algorithm):

        if algorithm=="BFS":
            return bfs(self.start,self.goal,self.env)

        if algorithm=="DFS":
            return dfs(self.start,self.goal,self.env)

        if algorithm=="A*":
            return astar(self.start,self.goal,self.env)