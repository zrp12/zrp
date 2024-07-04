import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { generate } from "./lib/generator.js";
import { createRandomPicker } from "./lib/random.js";
import { log } from "console";

// 不能通过绝对路径读取 node article_generator/index.js会报错
// fs.readFile("./curpus/data.json", (err, data) => {
//     if (!err) {
//         console.log(data.toString());
//     } else {
//         console.log(err);
//     }
// });

function loadCorpus(src) {
    const url = import.meta.url;// 读取当前脚本的绝对路径 拿到index.js的绝对路径
    const path = resolve(dirname(fileURLToPath(url)), "./curpus/data.json"); // 将拿到的路径格式化成绝对路径
    const data = fs.readFileSync(path, { encoding: "utf-8" });// 通过拿到的绝对路径来读取文件

    return JSON.parse(data);
}

// console.log(loadCorpus("./curpus/data.json"));



// console.log(url);
// const data = fs.readFileSync("./curpus/data.json", {encoding: "utf-8"});

// console.log(data);

// console.log(dirname(fileURLToPath(url)));
// console.log(path);
// console.log(JSON.parse(data));

const corpus = loadCorpus("./curpus/data.json");
const pickTitle = createRandomPicker(corpus.title);
const title = pickTitle();

// console.log(title);

const article = generate(title, { corpus });

console.log(article);

fs.writeFileSync(`./output/${title}.txt`, article.join('\n'))

