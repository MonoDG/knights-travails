const ROWS = 8;
const COLS = 8;

class Node {
    x;
    y;
    distance;
    predecessor;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.distance = null;
        this.predecessor = null;
    }
}

function createAdjacencyList() {
    const knightMovements = [
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
    ];

    let array = new Array(ROWS);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(COLS);
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            array[i][j] = new Array();
            for (let [offsetX, offsetY] of knightMovements) {
                if (
                    i + offsetX >= 0 &&
                    j + offsetY >= 0 &&
                    i + offsetX < ROWS &&
                    j + offsetY < COLS
                ) {
                    array[i][j].push(new Node(i + offsetX, j + offsetY));
                }
            }
        }
    }

    return array;
}

function visualize(array) {
    let output = "";
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            // Visualization
            output += `Neighbors for vertex [${i},${j}]: `;
            array[i][j].forEach(
                (neighbor) => (output += `(${neighbor.x}, ${neighbor.y}),`)
            );
            output += "\n";
        }
        output += "\n";
    }
    console.log(output);
}

function doBFS(graph, [x, y]) {
    const bfsInfo = new Array(ROWS);
    for (let i = 0; i < bfsInfo.length; i++) {
        bfsInfo[i] = new Array(COLS);
        for (let j = 0; j <)
    }
}

let adjList = createAdjacencyList();
visualize(adjList);
