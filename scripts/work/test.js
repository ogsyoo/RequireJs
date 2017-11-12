define(['workjs01'], function (w1) {
    // 两种方式：
    // define(function(require){
    console.log("test");
    // var o1 = require('workjs01');
    console.log(w1.moduleName);
});