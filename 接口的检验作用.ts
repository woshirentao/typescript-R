(() => {
  // 定义接口
  interface Person {
    readonly name: string;
    age?: number;
  }

  function checkPerson(o: Person) {
    //  o.name = '' // 不能修改，只读的
    // o.mamam = 123 // 不能添加属性
  }
  // 检测对象字面量时，要完全对得上才行，不能多也不能少
  checkPerson({
    age: 13,
    name: "任涛"
    //  print(name: string): void {
    //   console.log('对象定义方法')
    //  }
  });
  // 检测类实例时，可以多字段，但是不能少
  class Persons {
    name: string = "默认名字";
    print(name: string): void {
      console.log("类定义方法");
    }
  }
  const p = new Persons();
  checkPerson(p);
})();
