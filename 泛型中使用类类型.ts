// 泛型中使用类类型
class Animal {
  age: number
}
class Dog extends Animal {
  constructor(age: number) { 
    super()
  }
}
// new ()=> T : 代表一个具有 无参 构造函数 的 类类型T，也可以写成{new (): T}，也就是说t是个构造函数
// <T extends Animal>：代表T需要具有Animal特征，也就是t构造函数必须返回Animal对象
function createInstance<T extends Animal>(t: new ()=> T): T {
  return new t()
}
// let dog: Dog = createInstance(Dog) // error：类型“typeof Dog”的参数不能赋给类型“new () => Dog”的参数
