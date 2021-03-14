(()=>{
  // 返回数组的类型与传入数组的类型是相同的，T 用来捕获用户传入的类型
  function identity<T>(x: T[]): T[] {
    return new Array<T>().concat(x);
  }
  /**
   * 上面函数的两种使用方式：
   * 1、明确的指定了T是number类型
   * 2、利用了类型推论，让编译器来判断T的类型
   */
  identity<number>([1, 2]); // T: number
  identity([1, 2, "3"]); // T: string | number

  // 多个泛型参数的使用
  function identity1<T, K>(x: T[], y: K[]): [T[], K[]] {
    return [x, y]
  }

  console.log(identity1<number, string>([1,2,3], ['12']))
})()