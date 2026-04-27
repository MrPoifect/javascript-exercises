const findTheOldest = function(array) {
    let oldestAge = 0;
    let oldestPerson = "";
    array.forEach(age => {
        let tempAge = getAge(age.yearOfBirth, age.yearOfDeath);
        if(tempAge > oldestAge){
            oldestAge = tempAge
            oldestPerson = age
        }
    });
    return oldestPerson;
};

function getAge(birth, death) {
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
