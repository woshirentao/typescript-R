(() => {
  // 泛型函数
  function G1<T>(arg: T): T {
    return arg;
  }
  // 泛型函数的两种类型声明方式：
  let g: <U>(arg: U) => U = G1; // 一般用这个
  let gg: { <T>(arg: T): T } = G1;
})();
