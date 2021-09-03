// 1.导入的{}中定义的变量
import {flag, sum} from "./aaa.js";

if(flag) {
  if (flag){
    console.log('MMMMMMMM');
    console.log(sum(30,90));
  }
}

// 2.直接导入export定义的变量
import {num1, height} from "./aaa.js";

console.log(num1);
console.log(height);

// 3.导入export定义的function
import {mulity,Person} from "./aaa.js";
console.log(mulity(77,77));

const p = new Person();
p.run()

// 4.导入export default中的内容
import addr from "./aaa.js"; //导出export default名字随便起
addr('hahahahahahaha')

// 5.统一全部导入
// import {flag, sum, num1, height, mulity, Person} from "./aaa.js";
import * as aaa from "./aaa.js";
console.log(aaa.height);
