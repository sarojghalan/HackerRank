function countingValleys(steps, path) {
  let altitude = 0; // current altitude
  let valleyCount = 0; // number of valleys traversed
  let isInValley = false; // flag to track if the hiker is in a valley

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      altitude++; // step up
    } else if (path[i] === "D") {
      altitude--; // step down

      // check if the hiker entered a valley
      if (altitude < 0 && !isInValley) {
        isInValley = true;
      }
    }

    // check if the hiker left the valley
    if (altitude === 0 && isInValley) {
      valleyCount++;
      isInValley = false;
    }
  }

  return valleyCount;
}

// Example usage:
const steps = 8;
const path = "UDDDUDUU";

const result = countingValleys(steps, path);
console.log(result); // Output: 1
