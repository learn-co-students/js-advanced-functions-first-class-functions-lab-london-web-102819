// Code your solution in this file!
function returnFirstTwoDrivers(array) {
    return array.slice(0, 2)
}

function returnLastTwoDrivers(array) {
    return array.slice(array.length - 2, array.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) { return fare * int }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, f) {
    return f(arrayOfDrivers)
}