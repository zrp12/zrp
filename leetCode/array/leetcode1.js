var nums = [2,7,11,15], target = 9;

var twoSum = function(nums, target) {// 形参
    // for(let i = 0; i < nums.length; i++ ){
    //     for(let j = i + 1;j < nums.length;j++){
    //         if(nums[i] + nums[j] === target){
    //             return [i, j];
    //         }
    //     }           
    // }  
    // for(var i = 0;i < nums.length; i++){
    //     var res = target - nums[i];
    //     var a = nums.indexOf(res,i + 1);
    //     if(a !== -1){
    //          return [i,a];
    //     }
    // }

    
    var diff={};
    for(var i = 0;i < nums.length; i++){
        if(diff[nums[i]]!== undefined){ //查找对象中是否存在值，是不需要循环的
            return [diff[nums[i]],i]
        }
        diff[target - nums[i] ] = i;
    }
};
console.log(twoSum(nums,target));
//实参
