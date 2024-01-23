// TODO create an directed graph where it connects all the possible movements (first and subsequent) the knight can to to reach a specific spot

let kinghtMovements = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
];

function movePiece(i, j) {
    kinghtMovements.forEach(([offsetX, offsetY]) => {
        if (
            i + offsetX >= 0 &&
            j + offsetY >= 0 &&
            i + offsetX < 8 &&
            j + offsetY < 8
        ) {
            adjList[i][j].push([i + offsetX, j + offsetY]);
        }
    });
}

function createAdjacencyList() {
    return Array.from(Array(8), () => Array.from(Array(8), () => new Array()));
}

let adjList = createAdjacencyList();
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        movePiece(i, j, adjList);
    }
}
let output = "";
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        // Visualization
        output += `Neighbors for vertex [${i},${j}]: `;
        adjList[i][j].forEach((neighbor) => (output += `(${neighbor}),`));
        output += "\n";

        // Breadth-First Search
    }
    output += "\n";
}

function doBFS(graph, source, target) {
    let queue = [...graph[source[0]][source[1]]];
    let seen = [source];

    while (queue.length > 0) {
        let currentVertex = queue.shift();

        for (let neighbor of currentNeighbors) {
            if (
                seen.find(
                    (vertex) =>
                        vertex[0] === neighbor[0] && vertex[1] === neighbor[1]
                )
            ) {
                continue;
            }

            if (neighbor[0] === target[0] && neighbor[1] === target[1]) {
                tempSeen.push(neighbor);
                found = true;
                break;
            }
            tempSeen.push(neighbor);
            queue.push(graph[neighbor[0]][neighbor[1]]);
        }
    }
    queue.push(graph[neighbor[0]][neighbor[1]]);
    return seen;
}

console.log(output);
console.log(doBFS(adjList, [0, 0], [3, 3]));
// console.log(doBFS(adjList, [3, 3], [0, 0]));
// console.log(doBFS(adjList, [0, 0], [7, 7]));
