// TODO create an directed graph where it connects all the possible movements (first and subsequent) the knight can to to reach a specific spot
// function buildGraph(initialCoords) {
//     if (initialCoords[0] < 0 || initialCoords[1] < 0) return;
// }

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
adjList.forEach((row) => {
    row.forEach((column) => {
        output += `Neighbors for vertex: `;
        column.forEach((neighbor) => (output += `(${neighbor}),`));
        output += "\n";
    });
    output += "\n";
});
console.log(output);
