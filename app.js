const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for(let total of prices) {
//     total += prices
// }
// console.log(total);


// const total = prices.reduce((total, price) => {
//     return total + price
// })

//minumum price

// const minPrice = prices.reduce((min, price) => {
//     if(price < min) {
//         return price;
//     }
//     return min;
// })


// const movies = [
//     {
//         title: 'Amari',
//         score: 39,
//         year: 1984
//     },
//     {
//         title: 'Stand With U',
//         score: 85,
//         year: 2013
//     },
//     {
//         title: 'Warzone',
//         score: 25,
//         year: 2004
//     },
//     {
//         title: 'Blinders',
//         score: 70,
//         year: 2017
//     }
// ]

// const highestRated = movies.reduce((bestMovie, currMovie) => {
//     if(currMovie.score > bestMovie.score){
//         return currMovie;
//     }
//     return bestMovie;
// })


const evens = [2, 4, 6, 8];
const pare = evens.reduce((sum, num) => sum + num, 100)