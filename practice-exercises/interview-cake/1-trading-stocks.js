// Writing programming interview questions hasn't made me rich. Maybe trading Apple stocks will.
// Suppose we could access yesterday's stock prices as an array, where:
//
// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.
//
// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

//Solution: O(n) time and O(1) space
function getMaxProfit(stockPricesYesterday) {
  //make sure we have at least two prices
  if(stockPricesYesterday.length < 2) {
    throw new Error('need at least 2 prices to buy and sell');
  }
  //we will greedily update maxProfit and minPrice, so initialize them tothe first price and the first possible sell
  var minPrice = stockPricesYesterday[0];
  var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  //start at the second (index 1) time. we can't sell at the first time, since we must buy before we sell and we can't buy and sell at the same time. if we started at index 0 we would try to buy *and* sell at time 0. this would give a profit of 0, which is a problem if our maxProfit is supposed to be negative it would return 0
  for(var i = 1; i < stockPricesYesterday.length; i++) {
    var currentPrice = stockPricesYesterday[i];

    //see what our profit would be if we bought at the min price and sold at the current price
    var potentialProfit = currentPrice - minPrice;

    //update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);

    //update minPrice so it's always the lowest price we've seen so far
    minProfit = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}
