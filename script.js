
/*/ ========= Ternary Oeration =========
let grade = 55;

let result = grade > 65 ? 'pass' : 'fail';

console.log(result)

let num3 = 1;

let isPositive = num3 > 0 ? true : false;

console.log(isPositive);

let adminUser = prompt('Enter your username: ');
adminUser = adminUser.toLocaleLowerCase().trim()
console.log(adminUser);

const message = adminUser === 'sara' ? 'Hello Sara!' : 'Hello User!';

console.log(message);

let x = 5;

try{
    if (x < 0) {
        console.log('Negative!'); 
    } else {
        throw "Error - I don't know what I'm doing";
    }
} catch (error) {
    console.log(error);
    alert('Please try again');
} finally {
    console.log('Ready to go again');
}

console.log("Does this log?");
*/


//The area is circular, r = 5, A = pi * r^2

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;


//each plant requires minimum of 0.8m^2

//week 0 = 20;  week 1 = 40;  week 2 = 80. 
//Hypothesis: Seems to be a function like f(t)  = 20 * 2^t-1   iff  week 0 is the initial week
//Hypothesis: It is a function like f(t) = 20 * 2^t iff the initial week is week 1 

//Suppose the space for each plant == 0.8 m^2
/*
    1. Calculate the number of plants
    2. Determine the total area of plants
    3. Know the difference of the total area and the area of the plants
    4. Apply if statements for < 50%, 50% < x < 80%, and > 80%
*/


//Assume the first week is 0
function predictGrowth (numberOfWeeks){
    let numberOfPlantsPerWeek = 20 * (2**numberOfWeeks);
    const areaOfGardern = 3.1415 * 25;
    //assume the area of each plant is always the minimum
    const areaOfEachPlant = 0.8;

    let spaceOccupiedPerWeek = numberOfPlantsPerWeek * areaOfEachPlant;
    let spaceAvailablePerWeek = areaOfGardern - spaceOccupiedPerWeek;
    let numberOfFlowersLeftForMaximumCapacity = spaceAvailablePerWeek / areaOfEachPlant;
    let percentageOfSpaceAvailable = (spaceOccupiedPerWeek / areaOfGardern) * 100;

    if (spaceOccupiedPerWeek < 0.50 * areaOfGardern){
        console.log("The number of space occupied is " + spaceOccupiedPerWeek + " meters square for " + numberOfPlantsPerWeek + " plants. There is " + spaceAvailablePerWeek.toFixed(2) + " meters square available for " + numberOfFlowersLeftForMaximumCapacity.toFixed(0) +" plants, which is the " + percentageOfSpaceAvailable.toFixed(1) + "% of the full capacity. So there is enough space for more plants");
        alert("The number of space occupied is " + spaceOccupiedPerWeek + " meters square for " + numberOfPlantsPerWeek + " plants. There is " + spaceAvailablePerWeek.toFixed(2) + " meters square available for " + numberOfFlowersLeftForMaximumCapacity.toFixed(0) + " plants, which is the " + percentageOfSpaceAvailable.toFixed(1) + "% of the full capacity. So there is enough space for more plants");
    } else if (spaceOccupiedPerWeek >= 0.50 * areaOfGardern && spaceOccupiedPerWeek < 0.80 * spaceOccupiedPerWeek){
        console.log("The number of space occupied is " + spaceOccupiedPerWeek + " meters square for " + numberOfPlantsPerWeek + " plants. There is " + spaceAvailablePerWeek.toFixed(2) + " meters square available for " + numberOfFlowersLeftForMaximumCapacity.toFixed(0) + " plants, which is the " + percentageOfSpaceAvailable.toFixed(1) + "% of the full capacity. So the plants are growing in an acceptable rate.");
        alert("The number of space occupied is " + spaceOccupiedPerWeek + " meters square for " + numberOfPlantsPerWeek + " plants.There is " + spaceAvailablePerWeek.toFixed(2) + " meters square available for " + numberOfFlowersLeftForMaximumCapacity.toFixed(0) + " plants, which is the " + percentageOfSpaceAvailable.toFixed(1) +"% of the full capacity. So the plants are growing in an acceptable rate.");
    }
    else if(spaceOccupiedPerWeek >= 0.80 * areaOfGardern && spaceOccupiedPerWeek <= areaOfGardern) {
        console.log("The number of space occupied is " + spaceOccupiedPerWeek + " meters square for " + numberOfPlantsPerWeek + " plants. There is " + spaceAvailablePerWeek.toFixed(2) + " meters square available for " + numberOfFlowersLeftForMaximumCapacity.toFixed(0) + " plants, which is the " + percentageOfSpaceAvailable.toFixed(1) +"% of the full capacity. You are about to exceed the full capacity of the garden.");
        alert("The number of space occupied is " + spaceOccupiedPerWeek + " meters square for " + numberOfPlantsPerWeek + " plants. There is " + spaceAvailablePerWeek.toFixed(2) +" meters square available for " + numberOfFlowersLeftForMaximumCapacity.toFixed(0) + " plants, which is the " + percentageOfSpaceAvailable.toFixed(1) + "% of the full capacity. You are about to exceed the full capacity of the garden.")
    } else {
        console.log("There is no more space for plants. Please buy another garden.")
    }
}

predictGrowth(0);  //first week
predictGrowth(1);  //second week
predictGrowth(2);
predictGrowth(3);
predictGrowth(4);
//stop til plant count is 80% of the maximum capacity
//Monitored, if capacity is between 50% and 80% after a number of weeks
//planted if after number of weeks is < 50%