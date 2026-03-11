from collections import deque

def bfs(start, goal, env):

    queue = deque([(start,[start])])
    visited = set()

    while queue:

        node,path = queue.popleft()

        if node == goal:
            return path

        if node in visited:
            continue

        visited.add(node)

        for neighbor in env.get_neighbors(node):

            queue.append((neighbor,path+[neighbor]))