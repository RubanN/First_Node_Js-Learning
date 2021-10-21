class myClass {
    constructor(name) {
        this.name = name;
    }
    myFunc() {
        console.log("MY Name is " + this.name);
    }
}
module.exports.myClass = myClass;