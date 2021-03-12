/**
 * this指向的问题:
 * this的值在函数被调用的时候才会指定,在返回一个函数或将函数当做参数传递的时候，很难确定this的值
 */
(() => {
  let obj = {
    w: 10,
    h: 10,
    getArea() {
      // 当返回function时，this的类型是any，实际指向window，一般不返回这种格式
      // return function() {
      //   let area = this.w * this.h; // 编译报错："this" 隐式具有类型 "any"，因为它没有类型注释。
      //   console.log(this); // 指向window
      // };
      /**
       * 解决办法：
       * 推荐使用箭头函数,箭头函数能保存函数创建时的this指向
       * 当noImplicitThis的值为false(不开启)，编译器不会指出this的指向问题，
       * 此时this的类型是any，any类型没有任何意义（即时调用不对，编译器也不会报错）
       * 当开启noImplicitThis后，会检测出this的类型为当前对象
       * */
      // return ()=>{
      //   let area = this.w * this.g // this.g不会报错，导致类型检测没有意义了
      //   console.log(this)
      // }
      /**
       * 以下是开启noImplicitThis后的结果:
       * 给编译器设置了--noImplicitThis标记，会指出this的问题，一般都打开
       */
      // return ()=>{
      //   let area = this.w * this.g // this.g就会报错
      //   console.log(this) // 指向当前对象
      // }
      return () => {
        let area = this.w * this.h; // ok
        console.log(area); // 指向当前对象
      };
    },
    // this是个假参数，运行时不会有，不需要传，是给编译器看的
    callback(this: GlobalEventHandlers, e: Event) {
      console.log(this);
    }
  };
  let areaFunc = obj.getArea();
  areaFunc();
  
  /**
   * this在dom回调函数中的问题:
   * this不会指向document对象，需要提供一个显式的 this参数
   */
  // document.onclick = obj.callback;
})();
