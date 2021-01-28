import getProfit from "./functions/getProfit.js";
import getPairs from "./functions/getPairs.js";
import resultMatched from "./test/getPairsTest.js";


const inputPairs = [22, 3, 5, 0, 2, 2]
const sum = 5
const inputProfit = [13, 6, 3, 4, 10, 2, 3]
const expectedArr = [[5, 0], [3, 2]]


console.log("output getPairs: ", getPairs(inputPairs, sum))
console.log("output getProfit: ", getProfit(inputProfit))
console.log("output test pairs: " + resultMatched(inputPairs, sum, expectedArr))
