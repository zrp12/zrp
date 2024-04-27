var todoDate = [];

//监听用户点击新增按钮
var addTodo = document.querySelector('.btn');//按钮
var todoList = document.getElementById('todo-list');

function addNewTodo(){//点击按钮执行
    //获取input中的内容
    if(document.getElementById('newTodo').value.trim() !== ''){//去除空格
        todoDate.push({
            id: Math.floor(Date.now()),//向下取整 时间搓从1972到现在经历了多少秒
            title: document.getElementById('newTodo').value,
            completed: false
        });

        //渲染新的li
        render();
    }
    

}

// 将todoDate中的数据渲染出来
function render () {
    var str = '';

    todoDate.forEach(function(item){//遍历每一项
        str += `
        <li class="item">
                    <div class="flex">
                        <input type="checkbox" class="item-check">
                        <p class="item-content">${item.title}</p>
                        <span class="close">x</span>
                    </div>
                </li>
                `; //str = str + 
    });

    todoList.innerHTML = str;
}


addTodo.addEventListener('click',addNewTodo)