import React, { Component } from 'react';
import Todo from './Todo';
// import Todo from './TodoFunction';
import './App.css';

let staticListOfTodos = [
  {description : "Buy almond milk", complete: false},
  {description :  "Pick up dry cleaning", complete: false},
  {description : "Learn React", complete: false},
  {description : "Have fun this weekend",complete: false},

];

class App extends Component {
  state = {
    todos: staticListOfTodos,
    placeholder: '',
  }

  doTheDew = (index) => {
    console.log('Hello from the function reference', index);
    // staticListOfTodos[index].complete = !staticListOfTodos[index].complete
    // staticListOfTodos = staticListOfTodos.map((todo, inx) => inx === index ? {... todo, complete: !todo.complete} : todo);
    //  this.setState(staticListOfTodos.map((todo, inx) => inx === index ? {... todo, complete: !todo.complete} : todo));

    this.setState({
      todos: this.state.todos.map(
          (todo, inx) => inx === index ? {... todo, complete: !todo.complete} : todo)
    });
  }

  remaingTodosCount = () =>
  { return this.state.todos.filter(i => !i.complete).length };

  render() {
    return (
        <div className="App">
          <div className="todo-list">
            <h1>Todo List</h1>
            {this.state.todos.map((todo, idx) => (
                //Add a checkbox to show the not completed items from the list.
                // Also filter the list alphabetically.
                <Todo
                    key = {idx}
                    onToggleTodo = {() => this.doTheDew(idx)}
                    text={todo.description}
                    isComplete={todo.complete}
                />

            ))}
            <div className="new-todo">
              <input
                  id="new-todo-input"
                  type="text"
                  onChange={(e) => this.setState({ placeholder: e.target.value })}
                  value={this.state.placeholder}/>
              <button onClick={() => this.setState({
                todos: [...this.state.todos, {description : this.state.placeholder, complete: false}],
                placeholder: '',
              })}>Submit
              </button>
            </div>
            <div>
              There are <b>{this.remaingTodosCount()}</b> todos remaining.
            </div>
          </div>
        </div>
    );
  }
}

export default App;
