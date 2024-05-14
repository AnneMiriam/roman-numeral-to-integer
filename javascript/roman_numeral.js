function romanNumeral(string) {
  // Here, we define an object romanValues that maps each Roman numeral character to its corresponding integer value. This object is used to look up the value of each character in the Roman numeral string.
    romanValues = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    // We initialize two variables: result to store the final integer value of the Roman numeral, and prevValue to keep track of the previous value encountered during the iteration.
    result = 0
    prevValue = 0

    // This line starts a loop that iterates through each character of the roman string, starting from the last character and moving towards the first.
    for (let i = string.length-1; i >= 0; i--) {
      // For each character in the Roman numeral string, we look up its corresponding integer value from the romanValues object.
      const value = romanValues[string[i]]
      // Depending on whether the current value is less than the previous value encountered during the iteration, we either subtract it from the result (if it's a smaller value before a larger value, indicating subtraction), or we add it to the result.
      if (value < prevValue) {
        result -= value;
      } else {
        result += value;
      }
      // We update prevValue to hold the value of the current character for the next iteration.
      prevValue = value;
    }
      
    // Finally, we return the accumulated result, which represents the integer value of the input Roman numeral string.
    return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
