let profit = 0;
function maxProfit(prices) {
	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = i + 1; j <= prices.length - 1; j++) {
			if (prices[j] > prices[i]) {
				let currtProfit = prices[j] - prices[i];
				profit = Math.max(profit, currtProfit);
			}
		}
	}
	return profit;
}
let prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
