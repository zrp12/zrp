// let count = 0
// function add() {
//   count++
//   return count
// }



function add() {
    let count = 0
    function fn() {
      count++
      return count
    }
    return fn
  }
  var res = add()
  
  console.log(res());  // 1
  console.log(res());   // 2
  console.log(res());   // 3