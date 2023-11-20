/**
 *
 * @param {any} val
 * @param {Array} neighbors
 */
function GraphNode(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}
module.exports = {
    GraphNode,
};
