// Code your solution in this file!

const returnFirstTwoDrivers = array => {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = array => {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = arg => {
  return function(fare) {
    return fare * arg;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrDri, fn) => {
  return fn(arrDri);
};
