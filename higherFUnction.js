const radius = [ 3,2,1,4];

const area = function (radiusElement){
  return Math.PI * radiusElement * radiusElement;
};

const circumference = function(radiusElement){
  return 2*Math.PI * radiusElement;
};

const diameter = function(radiusElement){
  return 2 * radiusElement;
};

Array.prototype.calculate =function (logic){
  let output = [];
  for(let i = 0; i < this.length; i++){
    output.push(logic(this[i]))
  }
  return output;
};
console.log(radius.calculate(area ));
// console.log(calculate(radius , circumference ));
// console.log(calculate(radius , diameter ));