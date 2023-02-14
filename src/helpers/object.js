class MyObject{
    constructor (myVar, myConst, myArray, myEnum) {
        this.myVar = myVar
        this.myConst = myConst
        this.myArray = myArray
        this.myEnum = myEnum
    }
}

const firstObject = new MyObject(
    660049394606,
    10,
    200,
    { RED: 'red', GREEN: 'green', BLUE: 'blue' }
)
console.log (firstObject)
console.log (firstObject.myVar + parseInt(firstObject.myConst, 2))