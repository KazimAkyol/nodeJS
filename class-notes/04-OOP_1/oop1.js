"use strict";

/* ---------------------------------------- * // alt + shift + a
                    OBJECTS
/* ---------------------------------------- *

// Direkt objeleri isimlendirirken PascalCase veya camelCase kullanabiliriz.
const exampleObject = {
  propertyName: "value", // attribute, field

  methodName: function () {
    return "methodName() is a method";
  },

  methodAlternative() {
    return "methodAlternative is a method";
  },
};

console.log(exampleObject.propertyName);
console.log(exampleObject.methodName());

/*------------------------------------------*

const Car = {
  brand: "Mercedes",
  model: "Maybach",
  year: 2025,
  isAutoGear: true,
  colors: ["black", "red"],
  details: {
    color1: "black",
    color2: "red",
    engineSize: 5000,
  },
  startEngine: function () {
    return "Engine started";
  },
};

/*------------------------------------------*

console.log(Car);
console.log(Car.brand);
console.log(Car.model);
console.log(Car.year);
console.log(Car.isAutoGear);
console.log(Car.colors);
console.log(Car.details);
console.log(Car.startEngine());

// Alternative:

console.log(Car["brand"]);
console.log(Car["colors"]);
console.log(Car["colors"][0]);
console.log(Car["details"].engineSize);
console.log(Car["details"][engineSize]);

/*------------------------------------------*
//? THIS KEYWORD

const Car = {
  brand: "Mercedes",
  model: "Maybach",
  year: 2025,
  isAutoGear: true,
  colors: ["black", "red"],
  details: {
    color1: "black",
    color2: "red",
    engineSize: 5000,
  },
  startEngine: function () {
    console.log(this.brand);
    return "Engine started";
  },
  getDetails: function () {
    return this.details;
  },
  getDetailsWithArrowFn: () => {
    return this.details;
  },
};

// console.log(Car.getDetails());
console.log(Car.getDetailsWithArrowFn()); // This keyword arrow fonksiyonlarda ulasilamaz.

/*------------------------------------------*

//? ARRAY DESTRUCTIONS

const testArr = ["value0", "value1", "value2", "value3"];

// console.log(testArr[0]);
// console.log(testArr[1]);
// console.log(testArr[2]);
// const val3 = testArr.slice(3, 4);
// console.log(val3);

// siralama önemli
// rest operatörü her zaman en son kullanilir.
const [item1, item2, ...otherItems] = testArr;

console.log(item1);
console.log(otherItems);

/*------------------------------------------*/
//? OBJECT DESTRUCTURING

const Car = {
  brand: "Mercedes",
  model: "Maybach",
  year: 2025,
  isAutoGear: true,
  colors: ["black", "red"],
  details: {
    color1: "black",
    color2: "red",
    engineSize: 5000,
  },
  startEngine: function () {
    console.log(this.brand);
    return "Engine started";
  },
  getDetails: function () {
    return this.details;
  },
  getDetailsWithArrowFn: () => {
    return this.details;
  },
};

// Rest Operator (key isimleri önemli)

const { brand, ...otherItems } = Car;

console.log(brand);
console.log(otherItems);

/*------------------------------------------*/
/*------------------------------------------*/
/*------------------------------------------*/
/*------------------------------------------*/
/*------------------------------------------*/
