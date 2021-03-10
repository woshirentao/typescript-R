(() => {
  // 定义类
  class Person {
    // 声明成员变量的类型
    firstName: string;
    lastName: string;
    // 定义构造器方法：为了在创建对象的时候对属性进行初始化
    constructor(firstName: string = '任', lastName?: string) { // 参数默认值，可选参数
      this.firstName = firstName;
      this.lastName = lastName;
    }
    // 定义方法
    getFirstName() {
      return this.firstName;
    }
  }

  let aPerson = new Person();

  aPerson.firstName = "任";
  aPerson.lastName = "涛";
  // 不能访问不存在的成员变量
  // aPerson.name = '123'
  // 类型检查
  // aPerson.firstName = 123

  let aaPerson = new Person("小花");
  console.log(aaPerson.getFirstName());
})();
