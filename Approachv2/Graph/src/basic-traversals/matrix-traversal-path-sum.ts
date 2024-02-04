const hasPathSum = (root: any, targetSum: number) => {
  const ans: number[] = [];
  const dfs = (node: any, currentSum: any) => {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      ans.push(node.val + currentSum);
    }

    dfs(node.left, currentSum + node.val);
    dfs(node.right, currentSum + node.val);
  };
  console.log(ans);
  return ans.includes(targetSum);
};
