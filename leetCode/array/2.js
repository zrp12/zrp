// var nums = [2, 7, 9, 11],target = 9;
// var twoSum = function (nums, target) {
//     for(var i = 0; i < nums.length; i++){
//         for(var j = i + 1; j <nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 // return [i, j];
//                 console.log([i, j]);
//             }
//         }
//     }    
// };
// twoSum(nums,target)


var nums = [2, 7, 9, 11],target = 9;
var twoSum = function (nums, target) {
    var diff={};
    for(var i = 0;i < nums.length; i++){
        if(diff[nums[i]]!== undefined){ //查找对象中是否存在值，是不需要循环的
            return [diff[nums[i]],i]
        }
        diff[target - nums[i] ] = i;
    }
};
twoSum(nums,target)