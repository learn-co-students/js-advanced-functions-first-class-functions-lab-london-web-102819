// Code your solution in this file!
const returnFirstTwoDrivers = function(ary){ 
   return ary.slice(0,2);
};

const returnLastTwoDrivers = function(ary){
    return ary.slice(-2);
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int){
    return function(fare){
        return fare * int; 
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driverAry, returnLastTwoDrivers){
    return returnLastTwoDrivers(driverAry); 
} 