/**
 * 定义响应式-完成数据的劫持
 * @param {object} data: 需要添加属性的对象
 * @param {*} key: 属性名
 * @param {*} value: 属性值
 */

import { compile } from "./compiler";

export function defineReactive(data, key, val) {
  // 向obj添加一个属性
  Object.defineProperty(data, key, {
    enumerable: true, //可以被枚举（for遍历）
    configurable: true, //可以被配置（删除）
    get() {
      // 当a属性被调用（访问）时，自动调用返回结果作为属性的值
      console.log(`访问了${key}`);
      return val;
    },
    set(newValue) {
      // 当a属性被设置时，会自动调用，接受新的值（设置的值）
      console.log(`设置了${key}的属性：${key}=${newValue}`);
      if (val === newValue) return;
      val = newValue;
      // 更新$data
      update(this, key, newValue);
      compile(this); //this指向vm实例
    },
  });
}

function update(vm, k, v) {
  vm.$data[k] = v;
}
