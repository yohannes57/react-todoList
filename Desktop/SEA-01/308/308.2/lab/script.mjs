let radius=5;
const pi=3.1415;
const areaPlant=pi*radius*radius;
let minmumArea=0.8
let startingPant=20;
let noWeek=1;
// plant=startingPant*noWeek

// Predict the plant growth after a specific number of weeks.
let totalPlantGrowth=startingPant+noWeek*(startingPant);
console.log("total plant growth is per "+noWeek+" is = "+totalPlantGrowth)

// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// total area of ther garden :area=pi*5*5
console.log("total area "+areaPlant);
// maximum capacity of the garden totalArea/.8 because each plant need 0.8sq

console.log("maximum capacity of the garder :"+areaPlant/0.8);
let maximumPlantCanBeGrown=areaPlant/.8;
// 
console.log("80% of total capacity "+totalPlantGrowth*.8);
let tolatNoplantArea=totalPlantGrowth*0.8;
if(totalPlantGrowth>(0.8*maximumPlantCanBeGrown)){
    console.log("pruned")
}
if(totalPlantGrowth>(0.5*maximumPlantCanBeGrown) && totalPlantGrowth<(0.8*maximumPlantCanBeGrown)){
    console.log("Monitored")
}
if(totalPlantGrowth<(0.5*maximumPlantCanBeGrown)){
    console.log("planted ")
}
// 
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?
let noPlalnt=20+10*20;