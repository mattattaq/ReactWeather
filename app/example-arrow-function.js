// Arrow function vs. Anonymous function
var names = ['Andrew', 'Jared', 'Hai', 'Gweeen'];

names.forEach(function(name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Matthew'));

var person = {
  name: 'Matthew',
  greet: function () {
    console.log(names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    }))
  }
}

person.greet();

function add(a,b) {
  return a+ b;
}
console.log(add(1,3));
console.log(add(9,0));
//addStatement
var addStatement = (a,b) => {
  return a + b;
}
console.log(addStatement(4,3));
//addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(3, -4));
