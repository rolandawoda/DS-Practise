var subsets = function(nums) {
    let output = [];
    output.push([]);
    for(let i = 0; i < nums.length; i++){
      let newSubsets = [];
      for(let j = 0; j < output.length; j++){
        newSubsets.push([...output[j], nums[i]])
      }
      for(let k = 0; k < newSubsets.length; k++){
        output.push(newSubsets[k]);
      }
    }
    return output;
  };