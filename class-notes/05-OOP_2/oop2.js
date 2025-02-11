"use strict";

/* ------------------------------------ *
            OOP & CLASSES
/* ------------------------------------ */
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

/* ------------------------------------ */
/* ------------------------------------ */
/* ------------------------------------ */
