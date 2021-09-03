// 1.使用commonjs规范
const math = require('./mathUtils')

console.log(math.add(20,30));

console.log(math.mul(20,30));

// 2.使用es6模块化规范
import {name,age,height} from "./info";
console.log(name,age,height)
