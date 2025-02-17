//Kruskal Algorithm

function kruskal(graph, V) {
    const result = [];
    const parent = new Array(V).fill(-1);
    graph.sort((a, b) => a.weight - b.weight);
    let i = 0;
    let e = 0;
    while (e < V - 1) {
        const { src, dest, weight } = graph[i++];
        const x = find(parent, src);
        const y = find(parent, dest);
        if (x !== y) {
            result.push({ src, dest, weight });
            union(parent, x, y);
            e++;
        }
    }
    console.log('Edge Weight');
    for (const { src, dest, weight } of result) {
        console.log(`${src} - ${dest}: ${weight}`);
    }
}

function find(parent, i) {
    if (parent[i] === -1) {
        return i;
    }
    return find(parent, parent[i]);
}

function union(parent, x, y) {
    const xset = find(parent, x);
    const yset = find(parent, y);
    parent[xset] = yset;
}

const V = 4;

const graph = [
    { src: 0, dest: 1, weight: 10 },
    { src: 0, dest: 2, weight: 6 },
    { src: 0, dest: 3, weight: 5 },
    { src: 1, dest: 3, weight: 15 },
    { src: 2, dest: 3, weight: 4 }
];

kruskal(graph, V);

