class SortedList {
  constructor(){
    this.items = [];
    this.length = this.items.length
  }
  add(item){
    this.items.push(item)
  }
  get(pos){
    return this.items[pos]
  }
  max(){
    if(this.length > 0){
      return max(this.items)
    }else{
      throw new Error("EmptySortedList")
    }

  }
  min(){
    if(this.length > 0){
      return min(this.items)
    }else{
      throw new Error("EmptySortedList")
    }
  }
  average(){
    let reducer = (a, b)=> a + b;
    return this.items.reduce(reducer)/ this.items.length
  }
  sum(){
    let reducer = (a, b)=> a + b;
    return this.items.reduce(reducer)
  }
};

module.exports = SortedList;
