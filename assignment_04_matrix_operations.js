// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
```javascript
const readlineSync = require('readline-sync');

// =============================================================================
// PART A — Transpose a Matrix
// =============================================================================

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transposed = [];

    for (let j = 0; j < columns; j++) {
        const row = [];

        for (let i = 0; i < rows; i++) {
            row.push(matrix[i][j]);
        }

        transposed.push(row);
    }

    return transposed;
}

// =============================================================================
// PART B — Add Two Matrices
// =============================================================================

function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const columns = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < columns; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }

        result.push(row);
    }

    return result;
}

// =============================================================================
// PART C — Multiply Two Matrices
// =============================================================================

function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const columnsA = matrixA[0].length;
    const columnsB = matrixB[0].length;

    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const row = [];

        for (let j = 0; j < columnsB; j++) {
            let sum = 0;

            for (let k = 0; k < columnsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            row.push(sum);
        }

        result.push(row);
    }

    return result;
}

// =============================================================================
// Read a Matrix
// =============================================================================

function readMatrix(name) {
    const rows = readlineSync.questionInt(
        `Enter number of rows for ${name}: `
    );

    const columns = readlineSync.questionInt(
        `Enter number of columns for ${name}: `
    );

    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const input = readlineSync.question(`Enter row ${i + 1}: `);

        const values = input.trim().split(/\s+/).map(Number);

        matrix.push(values);
    }

    return matrix;
}

// =============================================================================
// Display a Matrix
// =============================================================================

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";

        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j] + "\t";
        }

        console.log(row);
    }
}

// =============================================================================
// Main Function
// =============================================================================

function main() {

    // -------------------------------------------------------------------------
    // PART A — Transpose
    // -------------------------------------------------------------------------

    console.log("\n===== PART A: TRANSPOSE MATRIX =====");

    const matrixA = readMatrix("Matrix A");

    console.log("\nOriginal Matrix:");
    displayMatrix(matrixA);

    const transposed = transposeMatrix(matrixA);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposed);


    // -------------------------------------------------------------------------
    // PART B — Matrix Addition
    // -------------------------------------------------------------------------

    console.log("\n===== PART B: ADD TWO MATRICES =====");

    const matrixB = readMatrix("Matrix B");
    const matrixC = readMatrix("Matrix C");

    if (
        matrixB.length !== matrixC.length ||
        matrixB[0].length !== matrixC[0].length
    ) {
        console.log("\nError: Matrices must have the same dimensions.");
    } else {
        const sum = addMatrices(matrixB, matrixC);

        console.log("\nMatrix B:");
        displayMatrix(matrixB);

        console.log("\nMatrix C:");
        displayMatrix(matrixC);

        console.log("\nSum:");
        displayMatrix(sum);
    }


    // -------------------------------------------------------------------------
    // PART C — Matrix Multiplication
    // -------------------------------------------------------------------------

    console.log("\n===== PART C: MULTIPLY TWO MATRICES =====");

    const matrixD = readMatrix("Matrix D");
    const matrixE = readMatrix("Matrix E");

    if (matrixD[0].length !== matrixE.length) {
        console.log(
            "\nError: Number of columns in Matrix D must equal " +
            "number of rows in Matrix E."
        );
    } else {
        const product = multiplyMatrices(matrixD, matrixE);

        console.log("\nMatrix D:");
        displayMatrix(matrixD);

        console.log("\nMatrix E:");
        displayMatrix(matrixE);

        console.log("\nProduct (D x E):");
        displayMatrix(product);
    }
}

main();
```

