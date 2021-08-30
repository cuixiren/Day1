// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（对象）/函数式编程（函数）
// filter/map/reduce

const nums = [10, 50, 111, 222, 333, 20, 40]

let total = nums.filter(n => n<100).map(n => n*2).reduce((preValue,n) => preValue + n)

// let total = nums.filter(n =>{
//   return n < 100
// }).map(n=>{
//   return n * 2
// }).reduce((preValue,n)=>{
//   return preValue + n
// },0)

/*
1.filter函数的使用
  filter中的回调函数有一个要求：必须返回一个boolean。
  当返回true时，函数内部会自动将这次回调的n加入到新的数组中
  当返回false时，函数内部会过滤掉这次的n
 */
// // 10,20,40,50
// // let newNums = nums.filter(function (n) {
// //   return n < 100
// // })
// console.log(newNums);
//
// // 2.map函数的使用(我理解和filter的区别：filter是用来过滤数组内的元素，返回值必须是boolean。而map是对数组内元素值进行修改)
// // 20，40，80，100
// let new2Nums = newNums.map(n => {
//   return n * 2
// })
//
// // 3.reduce函数的使用
// // 对数组中的所有内容进行汇总
// new2Nums.reduce(function (preValue,n) {
//   return preValue + n
// },0)
// // 第一次：preValue 0 n 20
// // 第二次：preValue 20 n 40
// // 第三次：preValue 60 n 80
// // 第四次：preValue 140 n 100
// // 240

// // 1.需求：取出所有小于100的数字
// let newNums = []
// for (let n of nums){
//   if(n<100){
//     newNums.push(n)
//   }
// }
//
// // 2.将所有小于100的数字全部x2
// let new2Nums = []
// for(let n of newNums){
//   new2Nums.push(n*2)
// }
//
// // 3.将所有new2Nums的数字相加，得出最终结果
// let total = 0
// for(let n of new2Nums){
//   total += n
// }
