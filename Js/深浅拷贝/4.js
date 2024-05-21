const user = {
    name: {
        firstname: '牛',
        lastname: '蜗'
    },
    age: 18
}

const newUser = structuredClone(user);
user.name.firstname = '牛牛';

console.log(newUser);