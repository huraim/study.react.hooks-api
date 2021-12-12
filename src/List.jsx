import React from 'react'
import Item from './Item'

function List(props) {

  let todoList = <div>loading...</div>
  if(!props.loading) {
    todoList = props.todos.map( (todo) => (
      <Item 
        key={todo.id}
        todo={todo} 
        changeTodoStatus={props.changeTodoStatus}
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

