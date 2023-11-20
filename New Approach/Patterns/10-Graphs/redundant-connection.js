/**
 *
 * @param {number[][]} edges
 * @returns {number[]}
 */
const findRedundantConnection = (edges) => {
    const parent = [...new Array(edges.length + 1).keys()],
        rank = new Array(edges.length + 1).fill(1);
    const find = (n) => {
        let p = parent[n];
        while (p !== parent[p]) {
            // path compression to make it easier for the next iteration
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    };
    const union = (n1, n2) => {
        let [p1, p2] = [find(n1), find(n2)];
        if (p1 === p2) {
            return false;
        }
        // if the p2 rank is lesser, then its a child of p1
        // so we are assigning the parent of p2 to be p1
        if (rank[p2] < rank[p1]) {
            parent[p2] = p1;
            rank[p1] += 1;
        } else {
            parent[p1] = p2;
            rank[p2] += 1;
        }
        return true;
    };
    for (let edge of edges) {
        if (!union(...edge)) {
            return edge;
        }
    }
};

console.log(
    findRedundantConnection([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 4],
        [1, 5],
    ])
);
