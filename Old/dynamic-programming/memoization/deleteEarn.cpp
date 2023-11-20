class Solution {
public:
    int n;
    unordered_map<int, int> freq;
    int f(int i, vector<int>& nums, vector<int>& dp){
        if(i == 0)
            return freq[nums[0]]*nums[0];
        if(i < 0)
            return 0;
        
        if(dp[i] != -1) return dp[i];
        
        int notPick = f(i-1, nums, dp);
        int pick = 0;
        if(nums[i] != nums[i-1]+1)
            pick = freq[nums[i]]*nums[i] + f(i - 1, nums, dp);
        else
            pick = freq[nums[i]]*nums[i] + f(i - 2, nums, dp);
        return dp[i] = max (pick,notPick);
    }
    int deleteAndEarn(vector<int>& nums) {
        vector<int> uniqEle;
        for(const auto& num : nums){
            if(freq[num] == 0)
                uniqEle.push_back(num);
            freq[num]++;
        }
        n = uniqEle.size();
        vector<int> dp(n, -1);
        sort(uniqEle.begin(), uniqEle.end());
        return f(n-1, uniqEle, dp);
    }
};
int main(){
  Solution sol = new Solution()
  sol.deleteAndEarn()
  return 0
}