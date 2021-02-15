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