/**
 * 接口：类型检查器，只能声明属性和方法，不能赋值与实现
 * 对值所具有的结构进行类型检查,对得上才行
 * 规定格式规范
 * 与类型别名type不同，接口可以重复声明，会合并在一起
 * 作用：1、作为类型检测
 * 2、类可以实现接口
 */
function checkPerson(o) {
    o.print(o.name);
}
checkPerson({
    age: 13,
    name: '任涛',
    print: function (name) {
        console.log('对象定义方法');
    }
});
var Persons = /** @class */ (function () {
    function Persons() {
        this.name = '默认名字';
    }
    Persons.prototype.print = function (name) {
        console.log('类定义方法');
    };
    return Persons;
}());
checkPerson(new Persons());
// 使用接口类型
//  let a: Person = {
//    name: ''
//  }
/**
 * 类实现接口:
 * 需要实现接口中的所有属性和方法
 */
var Rentao = /** @class */ (function () {
    function Rentao() {
        this.name = '类实现了接口';
    }
    Rentao.prototype.print = function (name) {
        console.log(this.name);
    };
    return Rentao;
}());
// let rt: Rentao = new Rentao()
// 也可以声明为接口类型
var rt = new Rentao();
rt.print('');
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配，但是类型必须要对得上
var p2 = function (soc, subStr) {
    console.log(soc, subStr);
    return true;
};
// 当函数一样调用
p2('hhhh', '123');
