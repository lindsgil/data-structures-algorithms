//use a tempTracker to insert temps, find min max mode and mean temperatures

//Time complexity is O (1) for each function and space is O(1) depending how many values we insert
//this approach implements an 'ahead of time', instead of 'in time' approach which would mean storing our values as we get them. in this case, ahead of time approach saves us space and time
//in time would take O(n) space and time
function tempTracker() {

  //for mode
  this.occurences = [];
  for(var i = 0; i < 111; i++) {
    this.occurences[i] = 0;
  }
  this.maxOccurences = 0;
  this.mode = null;

  //for mean
  this.totalNumbers = 0;
  this.totalSum = 0;
  this.mean = null;

  //for min and max
  this.tempMin = null;
  this.tempMax = null;
}

tempTracker.prototype.insert = function(temperature) {

  //for mode
  this.occurences[temperature] += 1;
  if (this.occurences[temperature] > this.maxOccurences) {
    this.mode = temperature;
    this.maxOccurences = this.occurences[temperature];
  }

  //for mean
  this.totalNumbers++;
  this.totalSum += temperature;
  this.mean = this.totalSum / this.totalNumbers;

  //for min and max
  if(this.tempMin === null || temperature < this.tempMin) {
    this.tempMin = temperature;
  }
  if(this.tempMax === null || temperature > this.tempMax) {
    this.tempMax = temperature;
  }
};

tempTracker.prototype.getMax = function() {
  return this.tempMax;
};

tempTracker.prototype.getMin = function() {
  return this.tempMin;
};

tempTracker.prototype.getMode = function() {
  return this.mode;
};

tempTracker.prototype.getMean = function() {
  return this.mean;
};
