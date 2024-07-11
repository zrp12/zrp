var findWordsContaining = function(words, x) {
    let indices = [];
    for(let i = 0; i < words.length; i++) {
        if(words[i].includes(x)){
            indices.push(i);
        }
    }
    return indices;
};

  console.log(findWordsContaining(["apple", "banana", "cherry", "date", "fig"], "a")); // 应该输出 [0, 1, 3]

// function findWordsWithChar(words, x) {
//     let indices = [];
    
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].includes(x)) {
//         indices.push(i);
//       }
//     }
    
//     return indices;
//   }
  
//   // 示例使用
//   const words = ["apple", "banana", "cherry", "date", "fig"];
//   const x = "a";
//   console.log(findWordsWithChar(words, x)); // 应该输出 [0, 1, 3]