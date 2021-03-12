/**
 * 总结：
 * 函数的其他定义方式:
 * 1、any
 * 2、Function
 * 3、类型别名
 * 4、函数类型-接口
 */
(() => {
  let func: any = function(name: string): boolean {
    return name == "rentao";
  };
  let func1: Function = function(name: string): boolean {
    return name == "rentao";
  };
  let func2: any = function(name: string): boolean {
    return name == "rentao";
  };
})();
