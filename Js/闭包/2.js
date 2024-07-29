let count = 1
let a = 1

function main() {
  let count = 2
  let a = 2

  function bar() {
    let count = 3

    function foo() {
      let count = 4
      console.log(a);
    }
    foo()
  }
  bar()
}
main()


