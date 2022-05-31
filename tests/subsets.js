var subsets = function (nums) {
  let res = [[]];
  //Iterate the input nums array
  for (const num of nums) {
    //Create a temporary variable to hold the values that are inside the res array
    const newRes = [];
    for (const sol of res) {
      newRes.push([...sol, num]);
    }
    //Use spread operator to form the res (array of arrays result) containing their last values and new values
    res = [...res, ...newRes];
  }
  return res;
};

module.exports = subsets;
