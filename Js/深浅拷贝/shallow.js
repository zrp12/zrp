let obj = {
    name : '阿华',
    like : {
        a : 'food'
    }
}

function shallow(obj){
    let newObj = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

// let obj2 = shallow(obj);
// obj.like.a = 'drink';
// // console.log(shallow(obj));
// console.log(obj2);