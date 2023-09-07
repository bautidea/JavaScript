// This function checks the speed of a car,
// if a car is driving under a limit we get 'OK'.
// For every 5 kms above the speed limit they are going to get 1 point.
// If a driver gets more than 12 points --> license suspended.
// Speed Limit = 70 km/h

/**
 * Using 'Better code' extension
 * * important comment.
 * ! Danger comment.
 * TODO Things to do.
 * desc
 * @date 2023-09-06
 * @param { * } speed
 * this function does something {@link checkSpeed}
 */

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  // Checking if the speed is avobe the limit.
  const aboveSpeed = speed - speedLimit;

  if (aboveSpeed > 0) {
    const pointToTake = Math.floor(aboveSpeed / kmPerPoint);

    if (pointToTake === 0) return console.log("1 Point");
    else if (pointToTake <= 12) return console.log(`${pointToTake} Points`);

    return console.log("License Suspended");
  }

  return console.log("OK");
}

checkSpeed(71);
