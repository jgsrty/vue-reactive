import { compile } from "./compiler";
import { defineReactive } from "./defineReactive";

export function Vue(options) {
  this.$options = options;
  this.$el = document.querySelector(options.el);
  this.$data = options.data;

  // 找出data对象中所有的key
  const keys = Object.keys(this.$data);
  console.log(keys);
  // 将data中的key代理到vm实例上
  keys.forEach((key) => {
    defineReactive(this, key, this.$data[key]);
  });

  compile(this)
}