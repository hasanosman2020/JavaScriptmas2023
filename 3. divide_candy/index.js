function calcTotalCandies (children, candy) {
  // Check if either children or candy is zero or negative
  if (children <= 0 || candy <= 0) {
    return 0
  }

  // Calculate the total number of candies that can be eaten altogether
  const totalCandies = children * Math.floor(candy / children)
  return totalCandies
}

const children = 3
const candy = 10
const totalCandies = calcTotalCandies(children, candy)
console.log(
  `The maximum number of pieces of candy that can be eaten altogether is: ${totalCandies}`
)
