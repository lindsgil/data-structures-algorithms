var removeElement = function(nums, val) {
    for(var i = 0; i < nums.length; i++) {
      if(nums[i] === val) {
        nums.splice(i, 1);
      }
    }
    return nums.length;
};

//remove specified value 'val' from an array of integers and return length
