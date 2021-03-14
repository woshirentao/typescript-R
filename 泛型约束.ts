(() => {
  interface Lengthwise {
    length: number;
  }
  // extends 在这里不是继承，而是用来 约束 T的类型，不再是随意的类型，得符合Lengthwise结构
  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg);
    return arg;
  }
  loggingIdentity<{ length: number }>({
    length: 12,
    // name: '' // error，属性不能多
  });
  loggingIdentity<string>('') // ok
  // loggingIdentity<number>('') // error 类型“number”不满足约束“Lengthwise”。
})();
