/**
 * 存取器
 * 通过getters/setters来控制对对象成员的访问
 * 注意：存取器要求你将编译器设置为输出ECMAScript 5或更高
 * 只带有 get不带有 set的存取器自动被推断为 readonly
 */
(() => {
  let passcode = "secret passcode";

  class Employee1 {
    private _fullName: string; // 私有属性一般以_开头
    // 读取器，相当于创建了fullName属性
    get fullName(): string {
      return this._fullName; // 间接访问私有成员
    }
    // 设置器
    set fullName(newName: string) {
      // 可以设置权限拦截
      if (passcode && passcode == "secret passcode") {
        this._fullName = newName;
      } else {
        console.log("Error: Unauthorized update of employee!");
      }
    }
  }
  let employee1 = new Employee1();
  employee1.fullName = "Bob Smith";
  console.log(employee1);
  if (employee1.fullName) {
    console.log(employee1.fullName);
  }
})();
