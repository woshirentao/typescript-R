/**
 * 静态成员：通过static修饰，包括静态成员和静态方法
 * 这些属性存在于类本身上面而不是类的实例上，只能由类访问
 * 注意：不能修饰构造函数，是可以被继承的
 */

(() => {
  class Doom {
    // 静态属性
    static doomName: string = "123"; // 初始值
    // 静态方法
    static getDoomName() {
      return this.doomName;
    }
  }
  console.log(Doom.doomName);
  Doom.doomName = '修改了静态属性'
  console.log(Doom.getDoomName());
})();
