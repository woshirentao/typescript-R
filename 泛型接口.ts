(() => {
  // 函数类型接口
  interface Inter {
    <T>(arg: T): T; 
  }
  // 可以把泛型参数提到接口名上，需要传入T参数
  interface Inter2<T> {
    (arg: T): T;
  }
  function identity<T>(arg: T): T {
    return arg;
  }
  let inter: Inter = identity;

  let inter2: Inter2<string> = identity; // 指定了类型
  // inter2(123) // error
  console.log(inter(123)) // ok
  console.log(inter2('123')) // ok

  // 类类型接口
  interface IBase<T> {
    data: Array<T>
    getItemById(index: number) : T
  }
  class User {
    id: number
    constructor(id: number) {
      this.id = id
    }
  }
  class Person implements IBase<User> {
    data: Array<User>
    getItemById(index: number): User {
      return this.data[index]
    }
  }
})();
