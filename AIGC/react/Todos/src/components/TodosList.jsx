import { Component } from 'react';
import TodoItem from './TodoItem';
import './TodosList.css';

class TodosList extends Component {

  render () {
    const { todos, deleteTodo,toggleTodo, editTodo } = this.props
    console.log(todos, '//////')
    return (
      <div>
        <h1>Todo List</h1>
        {
            todos.map((todo, index) => {
                return <TodoItem key={index}
                                index={index} 
                                todo={todo}
                                deleteTodo={deleteTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                />;
            })
        }
      </div>
    );
  }
}

export default TodosList;