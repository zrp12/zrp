import { Component } from 'react';
import TodosForm from './components/TodosForm';
import TodosList from './components/TodosList';

// es6 模块化 es6 module
// class extends super static 传统面向对象的能力
class App extends Component{
  constructor(props) {
    super(props); // 将父类的构造函数执行一下
    // 私有数据 声明自己的属性
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    this.state = {
      todos: savedTodos
    }
  }

  // 修改状态 数据流
  addTodo = (text) => {
    // Component 上有setState方法，修改状态，响应式更新
    // 状态就如纸巾
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text,
          completed: false
        }
      ]
    })
  }

  // 数据编程
  // 数据和界面状态是一一对应的
  // 删除
  deleteTodo = (index) => {
     const newTodos = [...this.state.todos];
     newTodos.splice(index, 1); // 删除某一项，修改原数组
     this.setState({
       todos: newTodos
     })
  }

  // 切换
  toggleTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].completed = !newTodos[index].completed;
    this.setState({
      todos: newTodos
    })
  }

  // 修改
  editTodo = (index, newText) => {
    const newTodos = [...this.state.todos];
    newTodos[index].text = newText;
    this.setState({
      todos: newTodos
    })
  }

  componentDidUpdate(){
    // console.log('组件更新了')
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }
  // 抽象方法 abstract function
  // 界面不一样的，重写

  render(){
    return (
      <div>
        <h1>Hello React</h1>
        <div>
          <TodosForm addTodo={this.addTodo} />
          <TodosList 
          todos = {this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
          editTodo={this.editTodo}
          />
        </div>
      </div>
    )
  }
}

export default App;