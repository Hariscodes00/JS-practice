let student = {
  id: 101,
  name: "Ali",
  grade: "A",
};
function checkKey(key){
    if(key in student){
        console.log("pass");
    }else{
        console.log("fail");
    }
}
checkKey("id");