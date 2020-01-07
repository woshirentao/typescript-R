/**
 * 接口：类型检查器
 * 对值所具有的结构进行类型检查,对得上才行
 * 规定格式规范
 */
function checkPerson(o) {
    // console.log(o.name);
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
//  let a:Person = {
//    name: ''
//  }
