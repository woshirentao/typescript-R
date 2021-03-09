// object类型
{
  function createObject(obj: object): object {
    console.log(obj)
    return obj
  }
  // createObject(1) // error
  createObject(String) // ok
  createObject({}) // ok

  // 定义具体的object类型{ name: string; age?: number }
  let object: { name: string; age?: number } = {
    name: ""
  };
  // 使用类型别名，和接口很像
  type nameObj = { name: string; age: number };
  let obj: nameObj = {
    name: "123",
    age: 12,
    // a: ''  // 不能写多于的属性
  };
}