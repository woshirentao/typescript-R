/**
 * 多态：
 * 1、父类的引用指向了子类的对象，表现形式就是：父类类型的变量 = 子类类型的对象
 * 2、不同的子类对象对于相同的方法，产生不同的行为
 */
(() => {
  class Person {
    // 声明成员变量的类型
    firstName: string;
    lastName: string;
    // 定义构造器方法
    constructor(firstName?: string) {
      this.firstName = firstName;
    }
    getFirstName(): void {}
  }
  class Rentao extends Person {
    age: number
    // 自定义构造器,必须调用super
    constructor(firstName: string) {
      super(firstName);
    }
    // 重写父类方法
    getFirstName(): void {
      console.log('Rentao类的方法调用')
    }
  }

  class Rentao1 extends Person {
    fullname: string;
    // 重写父类方法
    getFirstName(): void {
      console.log('Rentao1类的方法调用')
    }
  }

  // 多态的实现
  let aRT:Person = new Rentao("任");
  aRT.lastName = "涛";
  // aRT.age = 1; // 类型“Person”上不存在属性“age”，这是编译器的错误提示，实际上没有问题
  aRT.getFirstName() // 调用的是Rentao类里的方法

  let aRT1:Person = new Rentao1("任");
  // aRT1.fullname = ''; // 类型“Person”上不存在属性“fullname”，这是编译器的错误提示，实际上没有问题
  aRT1.getFirstName() // 调用的是Rentao1类里的方法
})();
