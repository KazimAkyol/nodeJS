"use strict";

/* ------------------------------------ *
            OOP & CLASSES
/* ------------------------------------ *
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak(Mimarlarin kullandigi mavi sablon kagidi)
//? CLASS: Obje türetmek icin kullanilacak sablon

//* Class Expression
// const PascalCaseClassName = class { ...}

//* Class Declaration

class PascalCaseClassName {
  propertyName = "value"; // attribute, field
  undefinedProperty;

  constructor(parametre1, parametre2 = "default-value") {
    this.parametre1 = parametre1;
    this.parametre2 = parametre2;
  }

  methodName() {
    return this;
  }
}

//* INSTANCE = Bir Class'tan türetilen objedir

const instanceExp = new PascalCaseClassName(0, 1);
const instanceExp2 = new PascalCaseClassName(0);
// console.log(instanceExp);
console.log(instanceExp2);

/* ------------------------------------ *

class Car {
  isRunning = false;

  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  runEngine() {
    this.isRunning = true;
    console.log("Engine started");
    return this.isRunning;
  }
}

const Bmw = new Car("BMW", "760Li", 2025);
console.log(Bmw);
Bmw.runEngine();
console.log(Bmw);

const Mercedes = new Car("Mercedes", "AMG", 2025);
console.log(Mercedes);

/* ------------------------------------ *
//* INHERITANCE: MirasAlma. Baska bir class'in özelliklerini/metodlarini devralma. (parent-child)
//* SUPER: Parent Class - THIS:Child Class

class Vehicle {
  vehicleIsActive = true;

  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }
}

const vehicle1 = new Vehicle("Car");
console.log(vehicle1);
class Car extends Vehicle {
  isRunning = false;

  constructor(brand, model, year, vehicleType) {
    super(vehicleType); // Parent class'a parametre göndermek icin 'super keyword'ünü kullaniriz.
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const Bmw = new Car("BMW", "760Li", 2025, "Car");
// console.log(Bmw);

// const Motorbike = new Car("Harley-Davidson", "Street 750", 2021, "Motorbike");
// console.log(Motorbike);

class Accessory extends Car {
  constructor(brand, model, year, vehicleType, accessoryName) {
    super(brand, model, year, vehicleType);
    this.accessoryName = accessoryName;
  }
}

// const Bmw = new Accessory("BMW", "760Li", 2025, "Car", "Bosch Climate");
const BmwAccessory = new Accessory(
  Bmw.brand,
  Bmw.model,
  Bmw.year,
  Bmw.vehicleType,
  "Bosch Climate"
);
console.log(BmwAccessory);

/* ------------------------------------ */
//? Polymorphism: Miras aldigimiz sinifin özellik/metodlarini yeniden yazabiliriz.
//? Override:
//? Overload:

class Vehicle {
  vehicleIsActive = true;

  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }

  getDetailOfType() {
    console.log("This is from Vehicle Class");
    return this.vehicleType;
  }
}

const vehicle1 = new Vehicle("Car");
console.log(vehicle1);
class Car extends Vehicle {
  isRunning = false;

  constructor(brand, model, year, vehicleType) {
    super(vehicleType); // Parent class'a parametre göndermek icin 'super keyword'ünü kullaniriz.
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getDetailOfType() {
    console.log("This is from Car Class");
    return super.getDetailOfType();
  }
}

const Bmw = new Car("BMW", "760Li", 2025, "Car");
console.log(Bmw.getDetailOfType());
