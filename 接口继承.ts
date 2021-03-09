/**
 * 接口继承: 从一个接口里复制成员到另一个接口里，可以多继承
 * 类继承: 从一个类中继承所有非私有的属性和方法
 */
(() => {
  interface Shape {
    width: number;
  }
  interface Shape1 {
    color: string;
  }
  // 接口继承
  interface Square extends Shape, Shape1 {
    height: number;
  }
  let shape: Square = {
    width: 12,
    height: 12,
    color: "red"
  };

  // 类继承
  class Components {
    width: number;
    height: number;
    private color: number;
    display(): void {}
  }
  // 继承了Components的所有属性和方法，包括私有的color
  interface Button extends Components {

  }
  // 因为属性“color”在类型“Button”中是私有属性，但在类型“CButton”中不是，所以CButton不能实现Button类
  // class CButton implements Button {
  //   width: number;
  //   height: number;
  //   color: number;
  //   display(): void {}
  // }
  // 解决办法：这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现
  class CButton extends Components implements Button {
    
  }
})();
