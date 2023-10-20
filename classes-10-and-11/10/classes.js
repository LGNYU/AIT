class Item {
  constructor(price) {
    this.price = price
  }

  applyDiscount(discount) {
    this.price -= discount
  }

}

class Shirt extends Item {

  constructor(price, size) {
    Item.call(this, price)
    this.size = size
  }
}

const s = new Shirt(5, 'med')
console.log(s)
