const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        time: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: 'UNIX编程艺术',
        time: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '编程珠玑',
        time: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '代码大全',
        time: '2006-6',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandle(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      // 1.普通for循环
      // let totalPrice = 0;
      // for (let i=0; i<this.books.length;i++){
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      // 2.for (let i in this.books)
      // let totalPrice = 0;
      // for(let i in this.books){
      //   const book = this.books[i]
      //   totalPrice += book.price * book.count
      // }
      // return totalPrice

      // 3.for (let i of this.books)
      // let totalPrice = 0;
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count
      // }

      let totalPrice = this.books.map(book => book.price * book.count).reduce((newItemPrice,lastItemPrice) => newItemPrice + lastItemPrice);

      return totalPrice
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})