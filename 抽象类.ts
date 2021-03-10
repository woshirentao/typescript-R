/**
 * 抽象类:
 * 抽象类作为其它派生类的基类使用
 * 它们不能被实例化，只能被继承
 * 与接口的不同：
 * 语法与接口相似
 * 1、抽象类可以包含成员的实现细节，也就是说不一定都是抽象方法，也可以有实例方法
 * 2、抽象成员必须包含abstract关键字，也可以包含其他访问修饰符（但是除private）
 */
abstract class Animal {
  name: string;
  age: number;
  // abstract height: string; // 抽象属性，一般不用
  height: string = '抽象类中的属性';
  abstract greet(name?: string): void; // 抽象方法必须在子类中实现
  abstract greet1(name?: string): void; // 抽象方法必须在子类中实现
  greent2() { // 可以有实例方法
    console.log('这是有具体实现的实例方法')
  }
}
// let ani: Animal = new Animal() // 抽象类无法被实例化

/**
 * 派生类中必须实现所有抽象类的抽象方法
 */
class Dog extends Animal {
  greet(): void {
    // 实现抽象方法
    console.log("狗在打招呼");
  }
  greet1(): void {
    // 实现抽象方法
    console.log("狗在打招呼1");
  }
}
class Cat extends Animal {
  greet(): void {
    console.log("猫在打招呼");
  }
  greet1(): void {
    // 实现抽象方法
    console.log("猫在打招呼1");
  }
}
// 实例化
let dog: Dog = new Dog();
let cat: Cat = new Cat();
let animais: Animal[] = [dog, cat];
animais.forEach(animal => {
  console.log(animal.height)
  animal.greet();
});
