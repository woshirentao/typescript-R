// 函数
// 规定参数的类型，返回值类型
function add(a, b) {
    return a + b;
}
// 声明变量的方式
var add1 = function (a, b) {
    return a + b;
};
// 箭头函数的方式
var add2 = function (a, b) {
    return a + b;
};
// 指定无返回值
var add3 = function (a, b) {
    console.log((a + b).toFixed(2)); // toFixed保留两位小数
};
add(1, 2);
// 以下代码会报错
// add(1, '')
// add(1)
/**
 * 默认值(=)
 * 有默认值的参数可以不指定类型，会自动指定类型
 * 注意：一般带有默认值的参数要放到参数列表的最后
 */
var add4 = function (a, b) {
    if (b === void 0) { b = 12; }
    return a + b;
};
add4(2);
// 注意：带有默认值的参数会自动指定了参数类型，下面代码会报错
// add4(2, '')
/**
 * 可选值(?)
 * 注意：一般可选的参数也要放到参数列表的最后
 */
var add5 = function (a, b) {
    return a + (b || 0);
};
console.log(add5(12));
/**
 * 剩余参数
 */
var add6 = function (a, b) {
    var rests = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rests[_i - 2] = arguments[_i];
    }
    return a + b + rests[0];
};
console.log('add6', add6(1, 2, 3, 4, 5));
