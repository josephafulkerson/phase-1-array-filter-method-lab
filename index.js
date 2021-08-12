function findMatching(driverNames, string) {
    return driverNames.filter(element => element.toLowerCase() === string.toLowerCase())
};

function  fuzzyMatch(driverNames, string) {
    return driverNames.filter(element => element.slice(0,1) === string.slice(0,1))
};

function matchName(driverName, string) {
    return driverName.filter(element => element.name === string);
}