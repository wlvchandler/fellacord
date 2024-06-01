class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> nm;
        for (int i = 0; i < nums.size(); i++) {
            if (nm.find(target - nums[i]) != nm.end()) {
                return {nm[target - nums[i]],i};
            }
            nm[nums[i]] = i;
        }
        return {};
    }
};
