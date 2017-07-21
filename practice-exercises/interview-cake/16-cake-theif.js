// You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.

//Time complexity is O(n * k) where n is the number of cakes and k is the number of capacities
//space complexity is O(k)

//example of dynamic programming

//example of cake types

var cakeTypes = [
  {weight: 7, value: 90},
  {weight: 3, value: 80},
  {weight: 2, value: 15},
];

var capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);

//solution

function maxDuffelBagValue(cakeTypes, weightCapacity) {

  //we make an array to hold the maximum possible values at every duffel bag weight capacity from 0 to weightCapacity
  //starting each index with value of 0
  var maxValuesAtCapacities = [];
  for (var i = 0; i <= weightCapacity; i++) {
    maxValuesAtCapacities[i] = 0;
  }

  for (var currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {
    //set a variable to hold the max monetary value so far from currentCapacity
    var currentMaxValue = 0;

    //we use a for loop here instead of forEach because we return Infinity, if we get a cakeType that weighs 0 kg and has a value, but forEach loops will always return undefined and you can't break out of them without throwing an exception
    for (var j = 0; j < cakeTypes.length; j++) {
      var cakeType = cakeTypes[j];

      //if a cake has a zero weight and a positive value the value of our duffel is infinite
      if(cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity;
      }

      //if the current cake weighs as much or less than the current weight capacity it's possible taking the cake would give a better value
      if (cakeType.weight <= currentCapacity) {

        //so we check should we use the cake or not?
        //if we use the cake, the most kilograms we can include in addition to the cake we're adding is the current capacity minus the cake's weight. we find the max value at that integer capacity in our array maxValuesAtCapacities
        var maxValuesUsingCake = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];

        //now we see if it's worth taking the cake. how does the value with the cake compare to the currentMaxValue?
        currentMaxValue = Math.max(maxValuesUsingCake, currentMaxValue);
      }
    }

    //add each capacity's max value to our array so we can use them when calculating all the remaining capacities
    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }
  return maxValuesAtCapacities[weightCapacity];
}
