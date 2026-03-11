def dfs(start, goal, env):

    stack = [(start,[start])]
    visited = set()

    while stack:

        node,path = stack.pop()

        if node == goal:
            return path

        if node in visited:
            continue

        visited.add(node)

        for neighbor in env.get_neighbors(node):

            stack.append((neighbor,path+[neighbor]))