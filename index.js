// Code your solution in this file!

const returnLastTwoDrivers = drivers => (drivers.slice(-2));
const returnFirstTwoDrivers = drivers => (drivers.slice(0,2));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(rate) {
    return (fare) => (fare*rate)
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, firstOrLast) => (firstOrLast(drivers));