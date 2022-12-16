// 1. Chess board

// Draw a chessboard with the given dimensions of height and width, according to the principle:

// * * * * * *

//    * * * * * *

// * * * * * *

//    * * * * * *

// Input parameters: length, width, character to display.
// Output: line with checkerboard representation

export const drawChessBoard = (height, width, char) => {
    if (height < 0 || width < 0 || char === "") console.log("The input parameters ar wrong")
    const start = "";
    for (let i = 0; i <= height - 1; i++) {
        if (i % 2 == 0) {
            console.log(start.padStart(width, char + " "));
        } else {
            console.log(" " + start.padStart(width, char + " "));
        }
    }
}

// drawChessBoard(10,20,"#");