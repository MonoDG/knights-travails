const ROWS = 8;
const COLS = 8;

function movePiece(array, i, j) {
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
    kinghtMovements.forEach(([offsetX, offsetY]) => {
        if (
            i + offsetX >= 0 &&
            j + offsetY >= 0 &&
            i + offsetX < 8 &&
            j + offsetY < 8
        ) {
            array[i][j].push([i + offsetX, j + offsetY]);
        }
    });
}

function createAdjacencyList() {
    let array = Array.from(Array(8), () =>
        Array.from(Array(8), () => new Array())
    );
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            movePiece(array, i, j);
        }
    }
    return array;
}

function visualize(graph) {
    let output = "";
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            // Visualization
            output += `Neighbors for vertex [${i},${j}]: `;
            graph[i][j].forEach((neighbor) => (output += `(${neighbor}),`));
            output += "\n";

            // Breadth-First Search
        }
        output += "\n";
    }
    console.log(output);
}

function doBFS(graph, [sourceX, sourceY], [targetX, targetY]) {
    const bfsInfo = new Array(ROWS);
    const path = [];

    for (let i = 0; i < graph.length; i++) {
        bfsInfo[i] = new Array(COLS);
        for (let j = 0; j < graph[i].length; j++) {
            bfsInfo[i][j] = {
                distance: null,
                predecessor: null,
            };
        }
    }

    bfsInfo[sourceX][sourceY].distance = 0;

    let queue = [];
    queue.push([sourceX, sourceY]);

    while (queue.length > 0) {
        let [x, y] = queue.shift();
        if (x === targetX && y === targetY) {
            let currentNode = bfsInfo[x][y];
            path.push([x, y]);
            while (currentNode.predecessor !== null) {
                path.push(currentNode.predecessor);
                currentNode =
                    bfsInfo[currentNode.predecessor[0]][
                        currentNode.predecessor[1]
                    ];
            }
            path.reverse();
            console.log(
                `You made it in ${path.length - 1} moves! Here's your path:`
            );
            for (let step of path) {
                console.log(step);
            }
        }
        for (let i = 0; i < graph[x][y].length; i++) {
            let [xNeighbor, yNeighbor] = graph[x][y][i];
            if (bfsInfo[xNeighbor][yNeighbor].distance === null) {
                bfsInfo[xNeighbor][yNeighbor].distance =
                    bfsInfo[x][y].distance + 1;
                bfsInfo[xNeighbor][yNeighbor].predecessor = [x, y];
                queue.push([xNeighbor, yNeighbor]);
            }
        }
    }
    return path;
}

function doBFSExample(graph, source) {
    const bfsInfo = [];

    for (let i = 0; i < graph.length; i++) {
        bfsInfo[i] = {
            distance: null,
            predecessor: null,
        };
    }

    bfsInfo[source].distance = 0;

    let queue = [];
    queue.push(source);

    while (queue.length > 0) {
        let vertex = queue.shift();
        for (let i = 0; i < graph[vertex].length; i++) {
            let neighbor = graph[vertex][i];
            if (bfsInfo[neighbor].distance === null) {
                bfsInfo[neighbor].distance = bfsInfo[vertex].distance + 1;
                bfsInfo[neighbor].predecessor = vertex;
                queue.push(neighbor);
            }
        }
    }

    return bfsInfo;
}

doBFS(createAdjacencyList(), [3, 3], [4, 3]);
