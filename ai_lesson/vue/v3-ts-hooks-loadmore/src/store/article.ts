import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Article } from '../types/article'

export const useArticleStore = defineStore('article',() => {
    // 文章数据集
    const _articles = [ // 模拟数据 _articles是私有数据
        {
            id: 1,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 2,
            title: 'Hello World'
        },
        {
            id: 3,
            title: 'Hello World'
        }, 
        {
            id: 4,
            title: 'Hello World'
        },
        {
            id: 5,
            title: 'Hello World'
        },
        {
            id: 6,
            title: 'Hello World'
        },
        {
            id: 7,
            title: 'Hello World'
        },
        {
            id: 8,
            title: 'Hello World'
        },
        {
            id: 9,
            title: 'Hello World'
        },
        {
            id: 10,
            title: 'Hello World'
        },
        {
            id: 11,
            title: 'Hello World'
        },
        {
            id: 12,
            title: 'Hello World'
        },
        {
            id: 13,
            title: 'Hello World'
        },
        {
            id: 14,
            title: 'Hello World'
        },
        {
            id: 15,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 16,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 17,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 18,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 19,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 20,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 21,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 22,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 23,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 24,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 25,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 26,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 27,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 28,
            title: '恭喜昔年成功拿到offer!'
        },
        {
            id: 29,
            title: '恭喜昔年成功拿到offer!'
        }
    ]
    // 响应式文章数据
    const articles = ref<Article[]>([])
    // 获取每页文章列表 action
    const getArticles = (page: number, size: number = 10) => {
        // resolve后的数据类型约束
        return new Promise<{
            data: Article[];
            total: number;
            page: number;
            hasMore: boolean;
        }>(resolve => {
            setTimeout(() => {
                // 按页切割 得到当前页面数据
                const data = _articles.slice((page - 1) * size, page * size) 
                // 追加数据
                articles.value = [...articles.value, ...data]
                resolve({
                    data,
                    total: _articles.length,
                    page,
                    // 判断是否还有更多数据 如果没有数据后就false
                    hasMore: page * size < _articles.length,
                })
            }, 500)
        })
    }
    return {
        articles,
        getArticles
    }
})