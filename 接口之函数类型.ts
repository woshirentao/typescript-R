/**
 * 函数类型：也是一种类型规范，需要借助接口才能实现
 * 可以理解为声明了一个匿名函数类型
 */
(() => {
  interface IFunc {
    (source: string, subString: string): boolean;
  }

  // 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配，但是类型必须要对得上
  let func: IFunc = function(soc: string, subStr: string): boolean {
    return true;
  };
  // 当函数一样调用
  func("hhhh", "123");
})();
