class MarsEnvironment:

    def __init__(self):

        self.grid = [
            ["R",".",".","X","."],
            [".","X",".",".","."],
            [".",".","S",".","."]
        ]

    def find_position(self, symbol):

        for i,row in enumerate(self.grid):
            for j,val in enumerate(row):
                if val == symbol:
                    return (i,j)

    def get_neighbors(self, position):

        directions = [(0,1),(1,0),(0,-1),(-1,0)]

        neighbors = []

        for dx,dy in directions:

            x = position[0] + dx
            y = position[1] + dy

            if 0 <= x < len(self.grid) and 0 <= y < len(self.grid[0]):

                if self.grid[x][y] != "X":
                    neighbors.append((x,y))

        return neighbors