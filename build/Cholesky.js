"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cholesky(A, b) {
    const n = A.length;
    const G = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (i === j) {
                let sum = 0;
                for (let k = 0; k < i; k++) {
                    sum += G[i][k] ** 2;
                }
                G[i][j] = Math.sqrt(A[i][i] - sum);
            }
            else {
                let sum = 0;
                for (let k = 0; k < j; k++) {
                    sum += G[i][k] * G[j][k];
                }
                G[i][j] = (A[i][j] - sum) / G[j][j];
            }
        }
    }
    const y = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += G[i][j] * y[j];
        }
        y[i] = (b[i] - sum) / G[i][i];
    }
    const x = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) {
            sum += G[j][i] * x[j];
        }
        x[i] = (y[i] - sum) / G[i][i];
    }
    return x;
}
const A = [
    [4, 12, -16],
    [12, 37, -43],
    [-16, -43, 98],
];
const b = [1, 2, 3];
const x = cholesky(A, b);
console.log("Solução do sistema:", x);
