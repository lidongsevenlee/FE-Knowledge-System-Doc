## 概要
关键字
* 轻量级编程语言，动态脚本语言
* 即使编译型
* 原型编程
* 多范式
* 面向对象；命令式；声明式；函数式

## 变量与类型

### 变量如何在内存中存储

### 类型检测与转换规则
题，实现原理

## 原型（链）

### why 原型

### new操作符原理
```javascript
function createNew() {
  const o = {}
  const Contr = Array.prototype.shift.call(arguments)
  o.__proto__ = Contr.prototype
  const result = Contr.apply(o, arguments)
  if (typeof result === 'object' && result !== null) {
    return result
  }
  return o
}

function A(n) {
  this.n = n
}

const a = createNew(A, 1)
console.log(a.n) // 1
```

### 实现继承

### ES6 class

## 作用域与闭包
1. 作用域是一套规则，用来管理引擎如何在当前作用域以及嵌套的子作用域中根据标识符名称解析变量查找
2. 作用域有两套工作模型：词法作用域 和 动态作用域
3. 词法作用域: 在变量、函数定义阶段产生
![scope](~@images/scope.png)
4. 全局作用域（window, global）& 函数作用域 & 块作用域: with(es3 deprecated), try catch(es3), let const(es6)
5. 闭包严格定义：函数在本身被定义的作用域之外执行，但依然保留了对定义时的作用域的引用（依然能访问定义时所在的作用域）
    * 非严格形式
    ![scope](~@images/closure-normal.png)
    * 严格形式
    ![scope](~@images/closure-strict.png)

### 理解作用域
程序执行角度谈一谈作用域

### 闭包原理和使用场景

## 执行机制

### JS代码执行过程
基于V8, 谈一谈V8的执行代码过程
![v8-excute-js-code](~@images/v8-excute-js-code.jpeg)

### 什么是异步编程? 异步编程演变




### 什么是EventLoop
* browser
```javascript
Promise.resolve().then(function() {
  console.log('promise0');
})
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
```
* nodejs
```javascript
const fs = require('fs')

console.log('start')

setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 100)

fs.readFile('./dedup.js', 'utf8', () => {
  console.log('I/O')
})

process.nextTick(() => {
  console.log('nextTick')
})

setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

setImmediate(() => {
  console.log('Immediate')
})

Promise.resolve().then(() => {
  console.log('promise3')
})

console.log('end')
```

## 语法和API

## 节流与防抖
![scope](~@images/debounce-throttle.gif)

### ECMAScript 与 JavaScript的关系

### 实现数组处理函数（纯函数）.map, .filter, reduce

### 正则表达式题

### 异常处理
