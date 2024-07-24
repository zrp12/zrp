// todoList 响应式业务封装为hook 函数
import { ref, computed } from 'vue'

export const useTodos = () => {
    let title = ref('') // input
    const todos = ref([
        {
            "title": "学习hooks，去字节",
            "done": false
        }
    ])

    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false
        })
    }

    function clear() {
        todos.value = todos.value.filter(todo => !todo.done)
    }

    let active = computed(() => {
        return todos.value.filter(todo => !todo.done).length
    })

    let all = computed(() => {
        return todos.value.length
    })

    let allDone = computed({
        get: function() {
            return active.value === 0
        },
        set: function(value) {
            todos.value.forEach(todo => {
                todo.done = value
            })
        }
    })

    return {
        title,
        todos,
        addTodo,
        clear,
        active,
        all,
        allDone,
    }
}