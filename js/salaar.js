const vegetables=["onion","brinjal","potato","carrot","cabbage","pumpkin","cauliflower"];
//vegetables.forEach(veg=>console.log(veg));
function something(m,callback)
{
    console.log(m+"something something");
    callback();
}
//function character(){
    //console.log("ram","bhgyasree");
//}
//something("movie:",character);
let promise=new Promise((resolve,reject)=>{
    resolve("success");
});
//promise.then(result=>console.log(result));
//Asynchronous function
async function sum(){
    return 7+8;
}
//sum().then(console.log);
let std={
    NAME="Devin",
    AGE=21,
};