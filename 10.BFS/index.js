function bfs(graph, node) {
    const visited = new Set();
    const queue = [node];
    visited.add(node);
    while (queue.length) {
        const currentNode = queue.shift();
        console.log(currentNode);
        for (const neighbor of graph[currentNode]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
    }
}

const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
};

console.log('BFS Traversal:');
bfs(graph, 2);

