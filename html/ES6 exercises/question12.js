function countOddsAndEvens(arr) {
    return arr.reduce((acc, num) => {
      console.log(`evens: ${acc.evens}, odds: ${acc.odds} num: ${num}`)
      if (num % 2 === 0) {
        return {
          evens: acc.evens + 1,
          odds: acc.odds
        }
      } else {
        return {
          evens: acc.evens,
          odds: acc.odds + 1
        }
      }
    }, { odds: 0, evens: 0 })
  }
  
  console.log(countOddsAndEvens([11, 2, 36, 4, 15]));
  //  returns {odds: 2, evens: 3}