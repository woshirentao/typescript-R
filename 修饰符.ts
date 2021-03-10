/**
 * 修饰符：用来描述类中成员(属性、构造方法、方法)的可访问性，也叫访问修饰符，分为公共、私有、受保护的
 * 成员默认都为 public
 * 
 * public：任何属性和方法都可以被调用；子类中也可以访问；
 * private：私有的，实例不能调用，只能在本类内部中访问，子类中能继承但无法使用
 * protected: 受保护的，实例不能调用，只能在本类内部和子类内部中访问，子类中能继承且能使用
 */

// 1、修饰符可以添加在类属性和方法上
(() => {
  class Mine {
    private tel: string = "13948"; //只能在类内部访问
    private getTel() {
      console.log(this.tel);
    }
    public myTel() {
      // 可以通过公有方法往出暴露
      return this.tel;
    }
  }

  let object = new Mine();
  //  console.log(object.tel) // 不能访问
  // object.getTel() // 不能调用
  console.log(object.myTel());

  // 不能在子类中访问private属性
  class M extends Mine {
    getTel1() {
      // console.log(this.tel) // 能继承但是不能访问
    }
  }
  let m = new M();
  m.getTel1();
})();

// 2、修饰符可以添加在构造函数上
/**
 * 构造函数也可以被标记成 protected 或者 private，这意味着这个类不能被实例化
 * protected标记的构造函数，表示此类不能被实例化，只能被继承
 * private标记的构造函数，表示此类既不能被实例化，也不能被继承
 */
(() => {
  class PersonItem {
    protected name: string;
    protected constructor(theName: string) {
      this.name = theName;
    }
  }
  // let john = new PersonItem("John"); // 错误: 'PersonItem' 的构造函数是被保护的

  // Employee 能够继承 Person
  class Employee extends PersonItem {
    private department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }

    public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }
  // Employee类可以实例化对象
  let howard = new Employee("Howard", "Sales");
  howard.getElevatorPitch()
})();

// 3、修饰符可以添加在构造函数参数上
/**
 * 参数属性: 
 * 通过给构造函数参数前面添加一个访问限定符来声明
 * 这样会声明并初始化一个成员，不用再单独创建属性
 */
(()=>{
  class Room {
    private name: string
    constructor(protected age: number, name: string) {
      this.name = name
    }
  
  }
  let room = new Room(34, '小明')
  // console.log(room.age) // 不能访问
})()