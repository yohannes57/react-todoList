console.log("hello")
let variable=["A","B","c","D"];
for(let name of variable){
    console.log(name);
}
// 
// three ways of creating array
let nums= new Array(3,4,5);
let numss=Array(2,4,5);

let numArrs=[3,5,6,4];
// 
// exercise
let myMovies=["The Hobbit","Jurasic World","Prison Break"];
let i=1;
for(let movies of myMovies){
    console.log("my number #"+i+movies)
    i++;
}
myMovies[myMovies.length]="terminator";

console.log(myMovies);
myMovies[5]="rebuni";
console.log(myMovies)

myMovies[7]="yohnnen                deres";
console.log(myMovies);

//concat
let movies=["A","b","c"];
let combinedMovie=myMovies.concat(movies);
console.log(combinedMovie);
// 
// joint method
console.log(myMovies.join(" and "));
console.log(myMovies)

// 
// 
// push method add value to end
myMovies.push(`breaking Bad`);
console.log(myMovies)
// pop remove value at end
myMovies.pop()
console.log(myMovies);
// unshift added value to teh begining
// shift remove element from teh begining of array


// plice method
//can add or delete and number of elements at specified point within the array

let deletedElement=combinedMovie.splice(3,2,"new elemen","new element");

//slice element :will create a new array from a slice of the  old array
let newArray=combinedMovie.slice(2,4);
console.log(combinedMovie)


// 
// 
//at method
//allows you to acces value at the nth index
//it works reverse order to like -index start from right
const singleMmovie=combinedMovie.at(3);
console.log(singleMmovie)

//
//
//Reverse method -make array backwards
console.log(combinedMovie.reverse());

//
//flat() array are always 
let numArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(numArray)
console.log(numArray.flat())
//
let numArray2= [
	[1, 2, 3],
	[4, 5, 6],
	[
		[7, 8, 9],
		[10, 11, 12],
		[13, 14, 15]
	],
];

// sort
const sortedArray=combinedMovie.sort();
console.log(sortedArray);
console.log(sortedArray.lastIndexOf("rebuni"));


///forEach() method runs a cod eblock for each elemet in the array

combinedMovie.forEach(function(movie,i ){
    console.log(movie);
})

