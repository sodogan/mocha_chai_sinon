class Math {
  constructor(isLogEnabled) {
    this.isLogEnabled = isLogEnabled;
  }
  //adds two numbers
  add(number1, number2) {
    //get the result from
    let total = this._calculate(number1, number2);
    return total;
  }
  _calculate(val1, val2) {
    if (this.isLogEnabled) {
      console.log(`calculate with $val1 and $val2`);
    }
    return val1 + val2;
  }
}

module.exports = { Math };
