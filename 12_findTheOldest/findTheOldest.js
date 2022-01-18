const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function() {

    let oldest = {};
    let oldestAge = 0;

    // You simply need to loop over the array of objects and keep storing 
    // the person whose age is more than the oldest person you have until now.
    for (let i = 0; i < people.length; i++) {
        let age = people[i].yearOfDeath - people[i].yearOfBirth;
        let birth = people[i].yearOfBirth;
        let death = people[i].yearOfDeath;

        if (!death){
            const date = new Date(2022, 1, 14);
            age = date - birth;
            oldest = people[i];
        }
        // this if statement adds the age to oldestAge on first loop if greater than last
        // it stops if the number is not greater than the last number received.
        if (typeof death !== 'undefined' && age >= oldestAge) {
            oldestAge = age;
            oldest = people[i];
        }
    }
    console.log(oldest);

};

findTheOldest();

// Do not edit below this line
module.exports = findTheOldest;
