/**
 *
 * @param {number} n
 * @param {number[][]} edges
 */
const countComponents = (n, edges) => {
    const parent = [...new Array(n).keys()],
        rank = new Array(n).fill(1);
    let count = n;
    const find = (n1) => {
        let p = n1;
        while (p !== parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    };
    const union = (n1, n2) => {
        let [p1, p2] = [find(n1), find(n2)];
        if (p1 === p2) {
            return 0;
        }
        if (rank[p2] < rank[p1]) {
            parent[p2] = p1;
            rank[p1] += 1;
        } else {
            parent[p1] = p2;
            rank[p2] += 1;
        }
        return 1;
    };
    for (let edge of edges) {
        count -= union(...edge);
    }
    return count;
};
console.log(
    countComponents(10, [
        [5, 8],
        [3, 5],
        [1, 9],
        [4, 5],
        [0, 2],
        [7, 8],
        [4, 9],
    ])
);
