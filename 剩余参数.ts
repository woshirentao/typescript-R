/**
 * 剩余参数
 * 当参数个数不确定时使用
 */
(() => {
  let add6 = function(a: number, b: number, ...rest: number[]): number {
    return a + b + rest[0];
  };
  console.log("add6", add6(1, 2, 3, 4, 5));
})();
