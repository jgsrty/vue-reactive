/**
 * 模版编译
 * @param {object} vm: 由Vue创建的实例对象
 */
export function compile(vm) {
  // 1.找到要渲染的dom，获取innerHTML作为模版
  const node = vm.$el;
  let template = vm.$template;
  // 2.将{{xxx}}替换为对应的值
  // let reg = new RegExp("{{msg}}", "g");
  // template = template.replaceAll(reg, "hello");
  // let reg2 = new RegExp("{{message}}", "g");
  // template = template.replaceAll(reg2, "world");
  const keys = Object.keys(vm.$data);
  keys.forEach((key) => {
    let reg = new RegExp("{{" + key + "}}", "g");
    template = template.replaceAll(reg, vm.$data[key]);
  });
  // 3.更新对应innerHTML
  node.innerHTML = template;
}
