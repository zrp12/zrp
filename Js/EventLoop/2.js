let a  = 1;

for (let i = 0; i < 1000; i++){
    a++;
}
console.log(a);

setTimeout(function(){
    a++;
    console.log(a);
},1000)