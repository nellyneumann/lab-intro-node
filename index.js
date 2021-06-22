class SortedList {
  constructor() {
    this.items = []
    this.length = 0 
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b){return a - b});
    this.length ++
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items [pos]
    }
    else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length > 0){
      return this.items[this.length -1 ]
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0){
      return this.items[0]
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    let sum = 0
    for (let i = 0; i < this.items.length; i++){
      sum = sum + this.items [i]
    }
    return sum 
  }

  avg() {
    if (this.items.length > 0){
      let average = this.sum() / this.items.length
      return average
    }
    else {
      throw new Error('EmptySortedList');
    }
    
  }

}

module.exports = SortedList;
