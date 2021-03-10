/**
 * 继承：类从基类中继承了属性和方法
 * 派生类通常被称作 子类，基类通常被称作 超类、父类
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
    // 自定义构造器,必须调用super
    constructor(firstName: string) {
      super(firstName);
    }
    // 重写父类方法
    getFirstName(): string {
      return this.firstName + this.lastName;
    }
  }
  let aRT = new Rentao("任");
  aRT.lastName = "涛";
  console.log(aRT.getFirstName());
})();
