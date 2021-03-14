(() => {
  class Person<T, U> {
    name: T;
    age: U;
    constructor(name: T, age: U) {
      this.name = name;
      this.age = age;
    }
  }

  let person = new Person<string, number>("rentao", 23);
  // 也可以不传递泛型参数，使用类型推导
  let person1 = new Person("Jack", 10);
  console.log(person1)
})();
