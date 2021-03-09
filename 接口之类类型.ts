/**
 * 类类型：使一个类符合一种约定
 * 通过接口方式实现：类实现接口(implements关键字)
 * 需要实现接口中的所有属性和方法
 */
(() => {
  interface Person {
    readonly name: string;
    age: number;
    fly();
  }

  class Rentao implements Person {
    name: string = "类实现了接口";
    age: number;
    fly() {}
    // 可以增加一些属性和方法
    flyRate: number;
    print(name: string): void {
      console.log("打印：" + this.name);
    }
  }

  // 类可以实现多个接口
  interface Person3 {
    height: number;
    eat()
  }
  class Rentao1 implements Person, Person3 {
    name: string = "类实现了接口";
    age: number;
    height: number;
    fly() {}
    eat() {
      console.log('吃什么')
    }
  }

  let rt: Rentao1 = new Rentao1();
  rt.eat()
  rt.fly()


})();
