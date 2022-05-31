# Code Test

## Subsets

The principal function is described below:

```javascript
var subsets = function (nums) {
  let res = [[]];
  //Iterate the input nums array
  for (const singleNum of nums) {
    //Create a temporary variable to hold the values inside the res array
    const newRes = [];
    for (const arrayElement of res) {
      newRes.push([...arrayElement, singleNum]);
    }
    //Use spread operator to form the res (array of arrays result) containing their last values
    res = [...res, ...newRes];
  }
  return res;
};
```

\*nums are the array of input numbers.

## Find the town judge

The principal function is described below:

```javascript
var findJudge = function (n, trust) {
  //Detect invalid trust array
  if (trust.length < n - 1) return -1;

  //Create an array of 'how many times' each person trusted him/her.
  const array_of_times_being_trusted = Array.from({ length: n + 1 }, () => 0);
  //Create an array of 'how many times' each person is trusting someone
  const array_of_people_who_trust_someone = Array.from(
    { length: n + 1 },
    () => 0
  );

  //Create the array of 'times a person is trusted' and 'times a person is trusting someone'
  for (const [person, judge] of trust) {
    array_of_people_who_trust_someone[person]++;
    array_of_times_being_trusted[judge]++;
  }

  //Search in the array of times being trusted to find the Judge
  for (let i = 1; i < array_of_times_being_trusted.length; i++) {
    //Validate the two conditions:
    //judge is trusted by n - 1 people: everyone except themselves
    // judge trusts nobody
    if (
      array_of_times_being_trusted[i] === n - 1 &&
      array_of_people_who_trust_someone[i] === 0
    )
      return i;
  }

  return -1;
};
```
