'use strict';

const mouse = 15.678;
const pcDisplay = 123.965;
const wifiRouter = 90.2345;

console.log(Math.ceil(mouse), Math.ceil(pcDisplay), Math.ceil(wifiRouter), 'округлил до большего');

console.log(Math.floor(mouse), Math.floor(pcDisplay), Math.floor(wifiRouter), 'округлил до меньшего');

const sum = mouse + pcDisplay + wifiRouter;
console.log(sum);

const roundedSum = Math.floor(mouse) + Math.floor(pcDisplay) + Math.floor(wifiRouter);
console.log(roundedSum);

const roundedSumHundred = function (roundedSum) {
    return Math.ceil(roundedSum / 100) * 100;
};
console.log(roundedSumHundred(roundedSum));

console.log(Boolean.apply(roundedSum)); //I`m not sure if it`s a right answer

const rest = 500 - sum;
console.log(rest);

const avgPrices = sum / 3;
console.log(avgPrices.toFixed(2));

const bill = sum + (sum * Math.random());
console.log(bill.toFixed(2));

const netProfit = (sum / 2) - Math.random() * sum;
console.log(netProfit.toFixed(2)); 
