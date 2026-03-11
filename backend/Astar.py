import heapq

def heuristic(a,b):

    return abs(a[0]-b[0]) + abs(a[1]-b[1])

def astar(start,goal,env):

    queue = []

    heapq.heappush(queue,(0,start,[start]))

    visited=set()

    while queue:

        cost,node,path = heapq.heappop(queue)

        if node == goal:
            return path

        if node in visited:
            continue

        visited.add(node)

        for neighbor in env.get_neighbors(node):

            new_cost = len(path)+heuristic(neighbor,goal)

            heapq.heappush(queue,(new_cost,neighbor,path+[neighbor]))