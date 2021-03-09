// any：任意类型
{
  let a: any = "";
  a = 10;
  console.log(a);
  // 可以使用any定义一个元素类型不确定的数组
  let list: any[] = [1, true, "free"];
  list[1] = 100;
}