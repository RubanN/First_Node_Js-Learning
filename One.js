
//First method
function myFunc() {
    console.log("function myFunc");
}
var x = 12356;
module.exports.myFunc = myFunc;
module.exports.x = x;


// Second method
module.exports.func = function myFunc() {
    console.log("Function is called");
}
module.exports.num = x = 123456;

//Thrid method
module.exports = {
    func: func,
    num: num,
    dummy: () => { console.log("dummy function") }
}