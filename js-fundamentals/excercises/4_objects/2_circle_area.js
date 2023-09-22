// Im going to create a circle obect using Object Literal Syntax.
// the properties are:
//  - radius --> we can read and write that property.
//  - area --> we can only read the property.
const cirlce = {
  radius: 2,
  get area() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(cirlce.area); // --> 12.56

cirlce.radius = 4;
console.log(cirlce.area); // --> 50.26

// We cannot write the area object
cirlce.area = 150;
console.log(cirlce.area); // --> 50.26
