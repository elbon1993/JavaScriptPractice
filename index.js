Array.prototype.myMap = function (square) {
    var result = [];
    if (this && this.length > 0) {
        for (var i = 0; i < this.length; i++) {
            result.push(square(this[i]));
        }
    }
    return result;
}

function square(num) {
    return num * num;
}

var list = [1, 2, 3, 4];
console.log(list.myMap(square));

//Polyfill for bind

var employee = {
    name: 'chandrahas',
    id: 1
};

function display(...params) { // function display(salary, dept) {
    console.log(this.name, this.id, params);
}

var callBackFunc = display.bind(employee, 80000);
callBackFunc(123);

Function.prototype.myBind = function (employee, ...args) {
    return function (...params) {
        display.apply(employee, [...args, ...params]);
    }
}

var mycallBackFunc = display.myBind(employee, 90000);
mycallBackFunc(456);


//////////

sum = (num1) => (num2) => (num2)? sum(num1+num2): num1;

console.log(sum(1)(2)(3)(4)());