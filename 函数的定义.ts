// 函数：封装一段重复使用的代码
// 规定参数的类型，返回值类型：
// 注意：返回值类型可以省略（可以类型推断）
(() => {
  function add(a: number, b: number): number {
    return a + b;
  }
  // 函数表达式(匿名函数)的方式
  let add1 = function(a: number, b: number): number {
    return a + b;
  };
  // 完整写法：规定函数类型为(a: number, b: number) => number
  let addd: (a: number, b: number) => number = function(
    a: number,
    b: number
  ): number {
    return a + b;
  };
  // 箭头函数的方式
  let add2 = (a: number, b: number): number => {
    return a + b;
  };
  // 指定无返回值
  let add3 = (a: number, b: number): void => {
    console.log((a + b).toFixed(2)); // toFixed保留两位小数
  };
  add(1, 2);
  // 以下代码会报错
  // add(1, '')
  // add(1)
})();
