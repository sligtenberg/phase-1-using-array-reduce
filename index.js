const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const sumFunc = (accumulator, element) => accumulator + element;

const totalBatteries = batteryBatches.reduce(sumFunc, 0);

const totalBatteriesAlt = batteryBatches.reduce((accumulator, element) => accumulator + element, 0);

console.log("totalBatteries:" + totalBatteries);
console.log("totalBatteriesAlt:" + totalBatteriesAlt);