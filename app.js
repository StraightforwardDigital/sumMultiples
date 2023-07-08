function sumMul(n,m){
  // Check if n and m are valid inputs
  if (n <= 0 || m <= 0 || m <= n) {
    return "INVALID";
  }
  //set the variable to hold to total of multiples
  let total = 0;
  //setup a for loop to run through the numbers between n and m
  for (i = n; i < m; i++) {
    //if the number is a multiple of n, add it to running total
    if (i % n === 0) {
      total += i;
      }
    }
  //return the total once the for loop is complete
  return total;
}