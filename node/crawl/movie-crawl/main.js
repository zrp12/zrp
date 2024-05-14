//引入http请求库
let request = require("request-promise");//请求库
let cheerio = require("cheerio");//将html str变成内存中的DOM对象，方便查找

const DOUBAN_MOVIE_URL = 'https://movie.douban.com/chart';

async function main() {
    let html = await request({
        url: DOUBAN_MOVIE_URL
    });
    // console.log(html);
    //cheerio 在内存中实例化了DOM树  $ document
    //html str  -> DOM树 -> 子查询
    let $ = cheerio.load(html);
    const movieList = [];
    let movieNodes = $('#content .article .item');//.item 是类名选择器
    // console.log(movieNodes);
    for(let i = 0; i < movieNodes.length; i++) {
        let movieNode = cheerio.load(movieNodes[i]);
        // console.log(movieNode);
        let title = movieNode('.p12 a');
        console.log(title);
    };
};

main();
// - 他有我拿  浏览器只是上网的代理proxy
// 先发送一个HTTP请求  url  GET  https://movie.douban.com/chart
// 响应  html  字符串 
// - 解析html字符串，如果可以像css选择器一样，拿到了电影列表
// - 最后将所有的电影对象组成数组，以json数组的方式返回，Done    

