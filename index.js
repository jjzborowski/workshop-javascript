/* HOISTING */

// // function declaration - hoisted
// f1();
// function f1() {}
//
// // function expression - not hoisted
// f2();
// let f2 = function() {};
//
// // variable expression - not hoisted
// console.log(value);
// let value = 1;
//
// // class declaration - not hoisted
// let o1 = new Test();
// console.log(o1);
// class Test {}
//
// // class expression - not hoisted
// console.log(o2);
// let o2 = class {};

/* ------------------------------------------------------------------------------------------------------------------ */
/* THIS */

// console.log('0: ', this === window);
//
// function f1() {return this}
// function f2() {'use strict'; return this;}
// let f3 = () => {return this};
// let f4 = () => {'use strict'; return this};
// let obj1 = {fn: f1};
// let obj2 = {fn: f2};
// let obj3 = {fn: f3};
// let obj4 = {fn: f4};
//
// console.log('1: ', f1());
// console.log('2: ', f2());
// console.log('3: ', f3());
// console.log('4: ', f4());
// console.log('--------');
// console.log('5: ', obj1.fn());
// console.log('6: ', obj2.fn());
// console.log('7: ', obj3.fn());
// console.log('8: ', obj4.fn());
// console.log('--------');
// let obj5 = {name: 'test'};
// console.log(f1.call(obj5));
// console.log(f1.apply(obj5));
// console.log(f1.bind(obj5)());
// console.log('--------');
// console.log(f2.call(obj5));
// console.log(f2.apply(obj5));
// console.log(f2.bind(obj5)());
// console.log('--------');
// console.log(f3.call(obj5));
// console.log(f3.apply(obj5));
// console.log(f3.bind(obj5)());
// console.log('--------');
// console.log(f4.call(obj5));
// console.log(f4.apply(obj5));
// console.log(f4.bind(obj5)());
//
// console.log('--------');
// v1 = 'v1';
// console.log('2: ', v1);
// console.log('3: ', window.v1);
// console.log('4: ', this.v1);
//
// console.log('--------');
// this.v2 = "v2";
// console.log('2: ', v2);
// console.log('3: ', window.v2);
// console.log('4: ', this.v2);
//
// console.log('--------');
// let v3 = 'v3';
// console.log('2: ', v3);
// console.log('3: ', window.v3);
// console.log('4: ', this.v3);

/* ------------------------------------------------------------------------------------------------------------------ */
/* WHAT THE F#$% IS THIS 'OBJECT' ANYWAY? */

// // object literal syntax
// let obj = {name: 'test'};
// // let obj = new Object({name: 'test'});
// console.log('1: ', obj);
//
// // factory function syntax
// function createObject() {
//     return {name: 'test2'};
// }
// let obj2 = createObject();
// console.log('2: ', obj2);
//
// // constructor function
// function createObject2() {
//     this.name = 'test3';
// }
// let obj3 = new createObject2();
// console.log('3: ', obj3);
//
// function createObject3() {
//     this.name = 'test4';
//     return this;
// }
//
// let obj4 = createObject3.call({});
// console.log('4: ', obj4);
//
// let obj4a = createObject3.call({type: 'obj'});
// console.log('4: ', obj4a);
//
// let obj5 = createObject3();
// console.log('5: ', obj5);
//
// let obj6 = createObject3.call(window);
// console.log('6: ', obj6);
//
// class Test {
//     constructor() {
//         this.name = 'test5';
//     }
// }
//
// let obj7 = new Test();
// console.log('7: ', obj7);
//
// console.log('--------');
//
// let fn = new Function('return this');
// fn.name = 'fn';
// console.dir(fn);
// console.dir(fn());
//
// console.log('--------');
//
// let fn2 = function() {return this};
// console.dir(fn2);
// console.dir(fn2());
//
// console.log('--------');

/* ------------------------------------------------------------------------------------------------------------------ */
/* TYPE COERCION */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion

// String() - in case of + operator if any operand is a string => all primitives to strings
//
// Number() - in case of:
//     comparison operators (>, <, <=,>=)
//     bitwise operators ( | & ^ ~)
//     arithmetic operators (- + * / % )
//     unary + operator
//     loose equality operator == (incl. !=) - not if both operand are strings
//
// Boolean() - in case of the logical operator or logical context (if statement)

// console.log(1 < 2 < 3);
// console.log(3 < 2 < 1);
//
// console.log([] + []);
// console.log({} + []);
// console.log([] + {});
// console.log({} + {});
//
// console.log(true + false);             // 1
// console.log(12 / "6");                 // 2
// console.log("number" + 15 + 3);        // 'number153'
// console.log(15 + 3 + "number");        // '18number'
// console.log([1] > null);               // true
// console.log("foo" + + "bar");          // 'fooNaN'
// console.log('true' == true);           // false
// console.log(false == 'false');         // false
// console.log(null == '');               // false
// console.log(!!"false" == !!"true");    // true
// console.log(['x'] == 'x');             // true
// console.log([] + null + 1);            // 'null1'
// console.log([1,2,3] == [1,2,3]);       // false
// console.log({}+[]+{}+[1]);             // '0[object Object]1'
// console.log(!+[]+[]+![]);              // 'truefalse'
// console.log(new Date(0) - 0);          // 0
// console.log(new Date(0) + 0);          // 'Thu Jan 01 1970 02:00:00(EET)0'

/* ------------------------------------------------------------------------------------------------------------------ */
/* BEST PRACTICES */

// JavaScript best practices
// - use === rather than ==
// - Use parameter defaults rather than set values inside function
// - Keep DOM access to a minimum
// - Don’t trust any data
// - copy array/object and any variables contains an array/object
// - in arrow function return value rather then creating a variable
//
// let getChannelData = currentChannelId => {
//     let channelData = channelList.find(
//         item => item.channelExternalId === currentChannelId
//     );
//     return channelData;
// };
//
// let getChannelData = currentChannelId => channelList.find(
//     item => item.channelExternalId === currentChannelId
// );
//
// - use let or const rather than var
// - Don't excessively care about old technologies (e.g. IE8)
// - Keep in mind 'tyranny of small decisions' in case of optimization
//
// HTML best practices
// - Close all tags
// - Avoid putting inline styles
// - Remember! img tag required alt attribute
// - Consider using semantic elements
// - Don’t use divs for everything
// - Use lower case markup
//
// CSS best practices
// - Use shorthand
// - Alphabetize your properties
// -webkit-transition: 0.1s background-color, 0.1s color, 0.1s border-color;
// transition: 0.1s background-color, 0.1s color, 0.1s border-color;
// vertical-align: middle;
// font-size: 1em;
// border-radius: 0.2857142857142857em;
// box-sizing: border-box;
// outline: none;
// height: 2.4999999999999996em;
// line-height: 2.8571428571428568em;
// padding: 0 1.1428571428571428em;
// border: 0.14285714285714285em solid #E5E6EB;
// background-color: #ffffff;
// color: #3C4155;
// font-size: 1em;
// line-height: 1em;
// font-family: "Roboto",sans-serif;
// font-weight: 400;
// - EM vs PX vs VH/VW/VMIN/VMAX

// let obj = {
//     name: 'test 1'
// };
//
// console.log('1: ', obj);
//
// setTimeout(() => {
//    obj.name = 'test 3';
//    console.log('3: ', obj);
// }, 2000);
//
// obj.name = 'test 2';
// console.log('2: ', obj);

