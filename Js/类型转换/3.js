// 1 + '1' ===> '11'
// ToPrimitive(1)   ToPrimitive(1)
// 1    '1'
// ToString(1)  + '1'
// '1' + '1'
// console.log(1 + '1');

// num + 1
// ToPrimitive(null)   ToPrimitive(1)


// [] + {}
// ToPrimitive([])  +  ToPrimitive({})
// [].valueOf()  + {}.valueOf()
// [].toString()  + {}.toString()
// '' + '[object Object]'

console.log([] + {});