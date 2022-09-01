// // 1-always hungry
// function alwaysHungry(arr) {
//   var flag = false; // no food
//   var string = "";
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == "food") {
//       flag = true;
//       string = string + "'yummy',";
//     }
//   }
//   console.log(string);
//   if (flag == false) console.log("I'm Hungry");
// }
// alwaysHungry([3.14, "food", "food", true, "food"]);
// alwaysHungry([4, 1, 5, 7, 2]);
// // 2- High pass filter
// function highPass(arr, val) {
//   var filterArr = [];
//   console.log(filterArr);
//   for (var i = 0; i < arr.length; i++) if (arr[i] > val) filterArr.push(arr[i]);
//   return filterArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result);

// 3-better than average
// function betterThanAverage(arr) {
//   var sum = 0;
//   var avg;
//   var countBetterThanAvg = 0;
//   for (var i = 0; i < arr.length; i++) sum += arr[i];
//   console.log(sum);
//   avg = sum / arr.length;
//   console.log(avg);
//   for (var x = 0; x < arr.length; x++) {
//     if (arr[x] > avg) countBetterThanAvg++;
//   }
//   return countBetterThanAvg;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log("The numbers greater than average are" + result);
// 4-Array reverse
// function reverse(arr) {
//   var tempArr = [];
//   for (var i = arr.length - 1; i >= 0; i--) {
//     tempArr.push(arr[i]);
//   }
//   return tempArr;
// }
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]
// 5-fibo array
// function fibonacciArray(n) {
//   var fibArr = [0, 1];
//   for (var i = 2; i <= n; i++) {
//     fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
//   }
//   return fibArr;
// }

// var result = fibonacciArray(10);
// console.log(result);
