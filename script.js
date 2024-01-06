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
    // let board = Array.from(Array(8), () => new Array(8).fill(0));
    kinghtMovements.forEach(([offsetX, offsetY]) => {
        if (
            i + offsetX >= 0 &&
            j + offsetY >= 0 &&
            i + offsetX < 8 &&
            j + offsetY < 8
        ) {
            // board[i + offsetX][j + offsetY] = "X";
            adjList[i * 8 + j].push([i + offsetX, j + offsetY]);
        }
    });
    // let output = "";
    // for (let i = 0; i < board.length; i++) {
    //     output += "|";
    //     for (let j = 0; j < board.length; j++) {
    //         output += `${board[i][j]}|`;
    //     }
    //     output += "\n";
    // }
    // console.log(output);
}

function createAdjacencyList() {
    return Array.from(Array(64), () => new Array());
}

let adjList = createAdjacencyList();
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        console.log(`KNIGHT IS AT [${i}, ${j}]`);
        movePiece(i, j, adjList);
        console.log("");
    }
}

console.log(adjList);
