(() => {
  // 定义接口
  interface Person {
    readonly name: string;
    age?: number;
  }
  function checkPerson(o: Person) {
    console.log(o);
  }
  // 1、断言
  checkPerson({
    name: "rentao"
  } as Person);
  // 2、通过变量进行转换，只适用于多增加变量的情况
  checkPerson({
    name: "rentao"
    // height: 100  // 这种情况，多一个就会报错
  });

  let obj = {
    name: "rentao",
    height: 100
  };
  checkPerson(obj);

  // 3、索引签名：见下面可索引类型
})();
