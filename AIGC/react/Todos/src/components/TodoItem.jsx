import { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false,
            editText:this.props.todo.text
        }
    }

   handleEditChange = (event) => {
    this.setState({
        editText: event.target.value
    })
   }

   handleEditSave = () => {
    this.props.editTodo(this.props.index, this.state.editText)
    this.setState({
        isEditing: false
    })
   }
  render () {
    const { todo, deleteTodo, toggleTodo, editTodo, index } = this.props
    console.log(todo);
    const { text, completed } = todo
    return (
      <li className={`todo-item ${completed ? 'todo-item--completed' : ''}`}>
        {
            this.state.isEditing?(
                <div>
                    <input 
                        type="text"
                        value={this.state.editText} 
                        onChange={this.handleEditChange}
                    />  
                    <button onClick={this.handleEditSave}>保存</button>
                </div>
            ):(
            <div>
                <span className="todo-item__text"
                    onClick={() => toggleTodo(index)}
                >
                {todo.text}
                </span>
                <button onClick={() => this.setState({isEditing: true})}>编辑</button>
                <button className="todo-item__delete-btn" 
                onClick={() => deleteTodo(index)}>Delete</button>
            </div>
            )
        }
        
      </li>
    );
  }
}

export default TodoItem;