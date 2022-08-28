const obj = {}

let temp = ''
// 向obj添加一个属性
Object.defineProperty(obj,'a',{
  enumerable:true, //可以被枚举（for遍历）
  configurable: true, //可以被配置（删除）
  get() {
    // 当a属性被调用（访问）时，自动调用返回结果作为属性的值
    return temp
  },
  set(newValue) {
    // 当a属性被设置时，会自动调用，接受新的值（设置的值）
    console.log('设置了a')
    temp = newValue
  }
})

console.log(obj.a)
obj.a = 2000
console.log(obj.a)