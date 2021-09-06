// 1.使用commonjs规范
const math = require('./js/mathUtils')

console.log(math.add(20,30));

console.log(math.mul(20,30));

// 2.使用es6模块化规范
import {name,age,height} from "./js/info";
console.log(name,age,height)

// 3.依赖CSS文件
require('./css/normal.css')
