// define(['workjs01'], function (w1) {
//     // 两种方式：
//     // define(function(require){
//     console.log("test");
//     // var o1 = require('workjs01');
//     console.log(w1.moduleName);
// });


function a(){
   this.name = 'name';
   this.age = 'age';
}
// a.sex = 0;
a.prototype.sex = '0';
console.log(a.prototype);
console.log(a.hasOwnProperty('name'));
console.log(a.hasOwnProperty('sex'));






