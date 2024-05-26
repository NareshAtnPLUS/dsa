package oneDimDp

import "data-structures/dsa-practice/utils"

const FINAL_STEP_COST = 0
const DECISION_0 = 0
const DECISION_1 = 1

func MinCostClimbingStairs(cost []int) int {
	cost = append(cost, FINAL_STEP_COST)
	for idx := len(cost) - 3; idx > -1; idx-- {
		cost[idx] += utils.Min(cost[idx+1], cost[idx+2])
	}
	return utils.Min(cost[DECISION_0], cost[DECISION_1])
}
