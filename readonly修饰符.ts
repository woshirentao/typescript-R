/**
 * readonly 关键字将属性设置为只读的。
 * 只读属性只能在声明时或构造函数里被初始化(赋值)。
 */

// 1、在属性上添加
(() => {
  class Person {
    readonly name: string;
    constructor(name: string) {
      this.name = name;
    }
    sendName(name: string) {
      // this.name = name // 也不能在类内部修改
    }
  }

  let john = new Person("John");
  // john.name = 'peter' // error name属性不能被设置
})();

// 2、在构造函数的参数上添加，这个叫参数属性
(() => {
  class Person {
    constructor(readonly name: string) { // 相当于声明了name属性，把声明和赋值合并至一处，这个和三大修饰符添加在构造函数上是一样的
      this.name = name;
    }
    // sendName(readonly name: string) { // 只允许在构造函数实现中使用参数属性
      
    // }
  }

  let john = new Person("John");
  console.log(john.name) // 可以访问name属性
  // john.name = 'peter' // error name属性不能被设置
})();