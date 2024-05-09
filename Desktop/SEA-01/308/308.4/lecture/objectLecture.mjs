// const vehicle = {
// 	color: "blue",
// 	hp: 4000,
// 	year: [1989,20088,2999,2099],
//     sound:function(){
//         console.log("vroom vroom");
//     }

// }
// console.log(vehicle.color,vehicle.hp,vehicle.year)

// const vehicle = {
// 	color: "blue",
// 	hp: 4000,
// 	year: 1989,
// 	"active registration": true
// }

// vehicle.color = "red"; // changing an existing property value
// vehicle.make = "Audi"; // adding a new key:value pair
// delete vehicle["active registration"]; // removing an existing property

// console.log(vehicle); // {color: 'red', hp: 4000, year: 1989, make: 'Audi'}

// for(const key in vehicle){
//     console.log(vehicle[key]);
//}

// /
const vehicle = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

console.log(vehicle.engine.size);