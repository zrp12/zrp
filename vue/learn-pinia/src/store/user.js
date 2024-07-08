import { defineStore } from 'pinia'// defineStore 是store的一部分

export const useUserStore = defineStore({
    id: 'user',
    state: () => { // 仓库里的数据源
        return {
            userInfo: {
                name: '昔年',
                age: 18,
                sex: '女'
            }
        }

    },
    actions: { // 专门用来修改stste
        changeUserName(name) {
            this.userInfo.name = name
        },
        changeUserSex(sex) {
            this.userInfo.sex = sex
        },
        changeUserAge(age){
            this.userInfo.age += age
        }

    },
    getters: { // 仓库中的计算属性
        afterAge(state) {
           return state.userInfo.age + 10
        }
    },
    persist: { // 开启数据持久化
        enabled: true,
        strategies: [ //想要持久化的对象
            {
                paths: ['userInfo'],
                storage: localStorage
            }
        ]
    }
})