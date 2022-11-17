// let user = {
//   fname: "Ammar",
//   lname: "Yasser",
//   age: 24,
//   addresses: {
//     eg: "cairo",
//     usa: "california",
//     getMainAddress: function () {
//       return `Main address is in : ${user.addresses.eg}`;
//     },
//   },
//   getFullName: function () {
//     return `Full Name is : ${user.fname} ${user.lname}`;
//   },
//   getAgeInDays: () => `your age in days is : ${user.age}`,
// };
// console.log(typeof user.fname);
// console.log(typeof user["age"]);
// console.log(user.getFullName());
// console.log(user.getAgeInDays());
// console.log(user.addresses.getMainAddress());
//////////
// let myname = "name";
// let myobj = {
//   name: "Ammar",
// };
// console.log(myobj[myname]);
// //////////
// let myobj = new Object();
// myobj.fname = "Ammar";
// myobj["lname"] = "Yasser";
// console.log(myobj);
//////////
// let mainObj = {
//   hasDiscount: false,
//   showMgs: function () {
//     return `You ${this.hasDiscount ? "" : " Dont"} have discount`;
//   },
// };
// let otherObj = Object.create(mainObj);
// otherObj.hasDiscount = true;
// console.log(otherObj.showMgs());
/////////////////////////////////
// const src1 = {
//   prop1: "val1",
//   method1: function () {
//     return "method1";
//   },
// };
// const src2 = {
//   prop2: "val2",
//   method2: function () {
//     return "method2";
//   },
// };

// const target = {
//   prop3: "val3",
// };

// Object.assign(target, src1, src2);
// console.log(target);

// const myobj = Object.assign({}, target, { prop4: "val4" });

// console.log(myobj);
/////////////////////////////// delete object properity
// const user = {
//   name: "Ammar",
// };
// console.log(user.name);
// delete user.name;
// console.log(user.name);
// /////////////////////////////shaps
// // console.log("#".repeat(15));
// for (let index = 10; index > 0; index--) {
//   console.log("#".repeat(index));
// }
// /////////////
// var myname = "Ammar";
// console.log(delete myname);
// console.log(myname);
// ////////////////
// const obj2 = Object.freeze({ age: 24 });
// console.log(obj2.age);
// console.log(delete obj2.age);
// console.log(obj2.age);
// ///////////////
// const obj3 = {};
// Object.defineProperty(obj3, "a", { value: 1, configurable: false });
// console.log(obj3);
// console.log(delete obj3.a);
/////////////////////////////////////
const user = {
  name: "Ammar",
  country: "Egypt",
  age: 24,
};

let finalData = "";
for (let x in user) {
  // console.log(`the ${x} is : ${user[x]}`);
  finalData += `<div>the ${x} is : ${user[x]}</div>`;
}

// console.log(finalData);
document.getElementById("info").innerHTML = finalData;
//////////////////////////////////////////
// constructor function
// function Phone(serial, color, price) {
//   this.serial = serial;
//   this.color = color;
//   this.price = price;
// }
// const phone1 = new Phone(123, "red", 500);
// console.log(phone1.serial);
// console.log(phone1.color);
// console.log(phone1.price);
/////////////////////////////////////////
// function User(fname, lname, age) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   this.fullName = function () {
//     return `the Fullname is ${this.fname} ${this.lname}`;
//   };
// }
// let user1 = new User("Ammar", "Yasser", 24);
// let user2 = new User("Mo", "Salah", 27);
// console.log(user1.fullName());
// console.log(user2.fullName());
/////////////////////////////////////////////
// let num1 = new Number(1);
// let num2 = 2;
// let str1 = new String("Ammar");
// let str2 = "Mo";
// let obj1 = new Object({ a: 1 });
// let obj2 = { b: 2 };
// console.log(num1.valueOf());
// console.log(num2.valueOf());
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(obj1.a);
// console.log(obj2.b);
///////////////////////////////////
// protoType
// function User(name) {
//   this.name = name;
//   this.welcome = function () {
//     return `Hello ${this.name}`;
//   };
// }
// let user1 = new User("Ammar");
// let user2 = new User("MO");
// console.log(User.prototype);
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

// console.log(user1);
// User.prototype.addTitle = function () {
//   return `mr. ${this.name}`;
// };

// console.log(Object.prototype);
// //add new properity to object constructor
// Object.prototype.Ammar = "Ammar Yasser";

// //any new object will have Ammar properity
// let myobj = { a: 1, b: 2 };
// console.log(myobj.a);
// console.log(myobj.b);
// console.log(myobj.Ammar);
//////////////////////////////////
// zFill method (put zeros after the numer to make all with the same width)
// String.prototype.zFill = function (width) {
//   let theResult = this;
//   while (theResult.length < width) {
//     theResult = `0${theResult}`;
//   }
//   return theResult.toString();
// };

// console.log("12".zFill(6));
// console.log("12".zFill(3));
// console.log("12".zFill(2));
/////////////////////////////////
// function User(name) {
//   this.name = name;
//   this.welcome = function () {
//     return `Hello ${this.name}`;
//   };
//   // if (!(this instanceof User)) {
//   //   throw new Error("must be called with New keyword!!");
//   // }
//   //ES6
//   if (!new.target) {
//     throw new Error("must be called with New keyword!!");
//   }
// }
// let user1 = new User("Ammar");
// //this will throw error because we didnt use New
// let user2 = User("MO");
/////////////////////////////
// class
// class User {
// static properity
//   static counter = 0;
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     User.counter++;
//   }
//   sayHello = function () {
//     return `Hello ${this.name}`;
//   };
//   showEmail = function () {
//     return `Email is ${this.email}`;
//   };
//   static countObjects = function () {
//     return `${this.counter} objects created`;
//   };
// }
// let user1 = new User("Ammar", "ammar@gmail.com");
// let user2 = new User("Mo", "mo@gmail.com");
// // Class constructor User cannot be invoked without 'new'
// // let user2 = User("Mo", "mo@gmail.com");
// console.log(user1.sayHello());
// console.log(user1.showEmail());
// // console.log(user2.sayHello());
// // console.log(user2.showEmail());
// console.log(User.countObjects());
////////////////////////////////////////
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     User.counter++;
//   }
//   sayHello = function () {
//     return `Hello ${this.name}`;
//   };
//   showEmail = function () {
//     return `Email is ${this.email}`;
//   };
//   get showInfo() {
//     return `Name is ${this.name} & Email is ${this.email} `;
//   }
//   writeMsg() {
//     return `message from parent class`;
//   }
//   changeName(newName) {
//     this.name = newName;
//   }

//   set changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
//   adminMgs() {
//     return `you are admin`;
//   }
//   writeMsg() {
//     return `message from child class`;
//   }
// }
// let user1 = new User("hend", "h@gmail.com");
// console.log(user1.showInfo);
// let admin1 = new Admin("sara", "sara@gmail.com");
// console.log(admin1.sayHello());
// console.log(admin1.adminMgs());
// console.log(admin1.writeMsg());

// user1.changeName("salma");
// console.log(user1.name);
// user1.changeEmail = "s@gmail.com";
// console.log(user1.email);
//////////////////////////////////
// meta data = is information about information
// const myobj = {
//   a: 1,
//   b: 2,
// };
// //define new prop or edit old one
// Object.defineProperty(myobj, "c", {
//   writable: false, //not accept to be edit
//   enumerable: false, //can not be fetched by in loop
//   configurable: false, //cant be deleted
//   value: 3,
// });
// console.log(myobj);
// console.log("#".repeat(15));
// myobj.c = 500;
// console.log(myobj);
// for (const key in myobj) {
//   console.log(key, myobj[key]);
// }
// delete myobj.c;
// ////////////////print properity of an object only not the value
// console.log(Object.getOwnPropertyNames(myobj));
// ////////////
// // all is false by default
// Object.defineProperty(myobj, "d", {
//   value: 4,
// });
// // all is true by default
// myobj.e = 5;
// console.log(Object.getOwnPropertyDescriptor(myobj, "a"));
// console.log(Object.getOwnPropertyDescriptor(myobj, "d"));
// console.log(Object.getOwnPropertyDescriptor(myobj, "e"));

// Object.defineProperties(myobj, {
//   f: {
//     writable: false,
//     enumerable: false,
//     configurable: false,
//     value: 6,
//   },
//   g: {
//     writable: false,
//     enumerable: false,
//     configurable: false,
//     value: 7,
//   },
//   h: {
//     writable: false,
//     enumerable: false,
//     configurable: false,
//     value: 8,
//   },
// });
// console.log(myobj);
