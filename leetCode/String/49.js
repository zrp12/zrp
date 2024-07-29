/**
 * 将给定字符串数组中的字母异位词组合在一起。
 * @param {string[]} strs - 字符串数组
 * @return {string[][]} - 包含分组后的字母异位词数组
 */
function groupAnagrams(strs) {
    const anagrams = {}; // 创建一个空对象，用于存储字母异位词及其对应的原始单词列表

    // 遍历输入的字符串数组
    for (const word of strs) {
        // 对当前单词中的字符进行排序
        // 先使用 split('') 方法将字符串转换为字符数组
        console.log(word);
        console.log([...word]);
        const charArray = word.split('');
        // console.log(charArray);

        // 使用 sort() 方法对字符数组进行排序
        // 注意：默认情况下，sort() 按字符的 Unicode 码点排序
        const sortedArray = charArray.sort();
        // console.log(sortedArray);

        // 使用 join('') 方法将排序后的字符数组转换回字符串
        // 这个排序后的字符串就是当前单词的特征码（signature）
        const sortedWord = sortedArray.join('');
        // console.log(sortedWord);

        // 如果哈希表中还没有这个特征码（即字母异位词组），就创建一个新的数组
        if (!anagrams[sortedWord]) {
            anagrams[sortedWord] = [];
        }

        // 将当前单词添加到对应特征码（即字母异位词组）的数组中
        anagrams[sortedWord].push(word);
    }

    // 使用 Object.values() 方法从哈希表中提取所有的数组值
    // 这些数组就是分组后的字母异位词
    return Object.values(anagrams);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupAnagrams(strs)
