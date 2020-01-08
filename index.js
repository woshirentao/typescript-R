/**
 * 接口：类型检查器，只能声明属性和方法，不能赋值与实现
 * 对值所具有的结构进行类型检查,对得上才行
 * 规定格式规范
 * 与类型别名type不同，接口可以重复声明，会合并在一起
 * 作用：1、作为类型检测
 * 2、类可以实现接口
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Rentao1 = /** @class */ (function () {
    function Rentao1() {
        this.name = '类实现了接口';
    }
    Rentao1.prototype.print = function (name) {
        console.log(this.name);
    };
    return Rentao1;
}());
// let rt: Rentao = new Rentao()
// 也可以将变量声明为接口类型
var rt = new Rentao();
rt.print('');
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配，但是类型必须要对得上
var p2 = function (soc, subStr) {
    console.log(soc, subStr);
    return true;
};
// 当函数一样调用
p2('hhhh', '123');
// 断言与接口的使用
var person = {};
// let person = <Person>{
//   name: '第二种用法'
// }
person.name = '断言person'; // 会报错，找不到name属性，需要使用断言告诉编译器
console.log(person.name);
var shape = {
    width: 12,
    height: 12,
    color: 'red'
};
// 类实现接口
var ShapeClass = /** @class */ (function () {
    function ShapeClass() {
    }
    return ShapeClass;
}());
/**
 * 接口继承类
 * 当接口继承了一个类时，它会继承类的成员但不包括其实现。
 */
var Components = /** @class */ (function () {
    function Components() {
    }
    Components.prototype.display = function () {
    };
    return Components;
}());
var button = {
    width: 0,
    height: 0,
    display: function () {
        console.log('displaying');
    }
};
button.display();
var dic = {
    name: 'RT'
};
console.log(dic.name);
var array = ['1', '2', '3'];
console.log(array);
/**
 * 注意：可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
 * 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
