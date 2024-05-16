function myinstanceof(L, R){
    while (L !== null){
        if(L.__proto__ === R.prototype){
            return true;
        }
        L = L.__proto__
    }
    return false;
}
myinstanceof([],Array)//true
myinstanceof([],Object)//true
console.log(myinstanceof([],Array));