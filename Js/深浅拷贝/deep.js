const user = {
    name: {
        firstname: '牛',
        lastname: '蜗'
    },
    age: 18
}

function deep(obj){
    let newObj = {};
    for (let key in obj){
        if (obj.hasOwnProperty(key)){// 只拷贝显示具有的属性
            if (obj[key] instanceof Object){ // typeof(obj[key] == 'object' && typeof(obj[key] !== null))obj[key]是不是对象
                newObj[key] = deep(obj[key]);
            }else{
                newObj[key] = obj[key];
            }          
         }
    }
    return newObj;
}
const newUser = deep(user);
user.name.firstname = '牛牛';

console.log(newUser);