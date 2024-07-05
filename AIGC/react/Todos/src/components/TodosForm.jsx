import { Component } from "react";
import './TodosForm.css'

class TodosFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: '聚会'
        }
    }
    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.inputText.trim()) {
            this.props.addTodo(this.state.inputText)
            this.setState({
                inputText: ''
            })
        }
    }
    render () {
      return (
        <form className="todo-form" onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            placeholder="请输入代办事项"
            className="todo-from_input"
            value={this.state.inputText} // 单向数据绑定
            onChange = {this.handleChange}
            />
            <button type="submit" className="todo-from_button">Add</button>
        </form>
      )
    }
  }
  
  export default TodosFrom