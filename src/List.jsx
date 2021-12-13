import React, {useContext} from 'react'
import Item from './Item'
import {TodoContext} from './TodoStore.js'

function List() {
  const {todos, loading, changeTodoStatus} = useContext(TodoContext);

  let todoList = <div>loading...</div>
  if(!loading) {
    todoList = todos.map( (todo) => (
      <Item 
        key={todo.id}
        todo={todo} 
        changeTodoStatus={changeTodoStatus}
      />
    ))
  }

  return (
    <ul>
      {todoList}
    </ul>
  )
}

export default List;

