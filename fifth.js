function merger(obj1,obj2,obj3){
    return{...obj1,...obj2,...obj3};
}
let obj1 ={
        name: "haris",
        age: 21,
}
let obj2 ={
        name: "haris",
        age: 31,
}
let obj3 ={
        name: "haris",
        age: 41,
}
console.log(merger(obj1, obj2, obj3));