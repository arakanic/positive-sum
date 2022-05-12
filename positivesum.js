// This function return the sum of all of the positives numbers in an array.

function positiveSum(arr) {
    return arr.reduce((sum, num) => sum + (num > 0 ? num : 0), 0)
  }