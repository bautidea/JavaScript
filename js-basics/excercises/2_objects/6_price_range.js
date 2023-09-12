// Going to create an array of objects. Each object is what we call
// a price range object.
// Think as the main object as a list of restaurants, depending on the price
// we will have expensive, moderate and inexpensive restaurants.
// Restaurants is an object with {name ; price} properties.

// The original excercise was to create a list of range price objects, but ill modify it
// a bit.
let PriceRanges = [
  { label: '$', tooltip: 'Expensive', minPerPerson: 0, maxPerPerson: 10 },
  { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
  { label: '$$$', tooltip: 'Inexpensive', minPerPerson: 21, maxPerPerson: 50 },
];

let restauranto = [{ averagePerPerson: 5 }];

// ! Below here is my modification.
/**
 * {@link CreatePriceRange} function creates an object that will host the list of restaurans
 *
 * This function creates an object that will add to the array a restaurant based on the price.
 * This restaurant is a {name ; price} object that depending on the price will be added to the
 * expensive, moderate or inexpensive category.
 * @date 2023-09-12
 */
function CreatePriceRange() {
  this.inexpensive = [];
  this.moderate = [];
  this.expensive = [];
}

/**
 * {@link CreateRestaurant} function creates the restaurant object, it takes
 * @param { string } restName - name of restaurant.
 * @param { number } price - price of restaurant.
 *
 * @date 2023-09-12
 */
function CreateRestaurant(name, price) {
  this.name = name;
  this.price = price;
}

/**
 * {@link addRestaurant} function will add to the priceRangeObject the restaurant
 * dependind on the price.
 *
 * @date 2023-09-12
 *
 * @param { Object } restaurant
 * @param { Object } priceRangeObj
 */
function addRestaurant(restaurant, priceRangeObj) {
  const restaurantPrice = restaurant['price'];

  // Creating a Object using Object Literal Syntax, i do this so when pushing
  // this object to the priceRangeObj i push it as a string and doesnt get
  // referenced to the original object..
  // * Try to push it with 'restaurant' Object and print it.
  const restaurantobj = {
    name: restaurant['name'],
    price: restaurantPrice,
  };

  if (restaurantPrice <= 50)
    return priceRangeObj['inexpensive'].push(restaurantobj);

  if (restaurantPrice <= 100)
    return priceRangeObj['moderate'].push(restaurantobj);

  return priceRangeObj['expensive'].push(restaurantobj);
}

// Creating PriceRange Object
let priceRange = new CreatePriceRange();

// Creating Restaurants.
let restaurant1 = new CreateRestaurant('Bautos', 150);
let restaurant2 = new CreateRestaurant('Tonnys', 100);
let restaurant3 = new CreateRestaurant('Mads', 50);

addRestaurant(restaurant1, priceRange);
addRestaurant(restaurant2, priceRange);
addRestaurant(restaurant3, priceRange);

console.log(priceRange);
