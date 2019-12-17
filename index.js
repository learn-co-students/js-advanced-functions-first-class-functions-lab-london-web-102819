// Code your solution in this file!

const returnLastTwoDrivers = drivers => (drivers.slice(-2));
const returnFirstTwoDrivers = drivers => (drivers.slice(0,2));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(rate) {
    return (fare) => (fare*rate)
}

const fareDoubler = (fare) => (createFareMultiplier(2)(fare));

const fareTripler = (fare) => (createFareMultiplier(3)(fare));

const selectDifferentDrivers = (drivers, firstOrLast) => (firstOrLast(drivers));