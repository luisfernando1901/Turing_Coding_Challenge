let subset_function = require("./tests/subsets");
let find_judge_function = require("./tests/find_judge");

//Runnting the tests
let subset_result = subset_function([1, 2, 3]);
let judge_result = find_judge_function(3, [
  [1, 3],
  [2, 3],
]);
console.log("The subset array result is: ", subset_result);
console.log("The Judge is the person number: ", judge_result);
