// 引入所需的模块
let request = require('request-promise') // 使用request-promise模块进行HTTP请求，需要先安装
let cheerio = require('cheerio') // 使用cheerio模块进行HTML解析，需要先安装
let fs = require('fs') // 使用fs模块进行文件操作
const util = require('util') // 使用util模块提供的工具函数

// 用于存储电影信息的数组
let movies = []

// 豆瓣电影Top250的基础链接
const basicUrl = 'https://movie.douban.com/top250'

// 用于确保某个函数只执行一次的函数
let once = function (cb) {
    let active = false
    if (!active) {
        cb()
        active = true
    }
}

// 输出函数，确保某段信息只输出一次
function log(item) {
    once(() => {
        console.log(item)
    })
}

// 解析电影信息的函数
function getMovieInfo(node) {
    let $ = cheerio.load(node) // 使用cheerio加载HTML节点
    let titles = $('.info .hd span') // 获取电影标题元素
    titles = ([]).map.call(titles, t => { // 使用map方法将标题元素转换为文本数组
        return $(t).text()
    })
    let bd = $('.info .bd') // 获取电影信息元素
    let info = bd.find('p').text() // 获取电影简介文本
    let score = bd.find('.star .rating_num').text() // 获取电影评分文本
    return { titles, info, score } // 返回电影信息对象
}

// 获取某一页的电影信息
async function getPage(url, num) {
    let html = await request({ // 使用request-promise发送HTTP请求获取页面HTML
        url
    })
    console.log('连接成功！', `正在爬取第${num+1}页数据`)
    let $ = cheerio.load(html) // 使用cheerio加载HTML页面
    let movieNodes = $('#content .article .grid_view').find('.item') // 获取电影节点
    let movieList = ([]).map.call(movieNodes, node => { // 遍历电影节点列表并解析电影信息
        return getMovieInfo(node)
    })
    return movieList // 返回解析后的电影信息列表
}

// 主函数，用于控制爬取流程
async function main() {
    let count = 25 // 每页电影数量
    let list = []
    // 循环爬取每一页的电影信息
    for (let i = 0; i < count; i++) {
        let url = basicUrl + `?start=${25*i}` // 构造当前页的URL
        list.push(... await getPage(url, i)) // 获取当前页的电影信息并加入到列表中
    }
    console.log(list.length) // 输出爬取的电影数量
    // 将爬取的电影信息写入JSON文件
    fs.writeFile('./output.json', JSON.stringify(list), 'utf-8', () => { // 将电影信息列表写入JSON文件
        console.log('生成json文件成功！')
    })
}

// 执行主函数
main()