import React, {useContext} from 'react'
import './item.css'
import {TodoContext} from './TodoStore.js'

function Item(props) {
  const {dispatch} = useContext(TodoContext);

  const toggleItem = (e) => {
    const id = e.target.dataset.id;
    dispatch({type:'CHANGE_TODO_STATUS', payload:id});
  }
  
  const itemClassName = props.todo.status === 'done' ? 'active' : '';

  return (
    <li data-id={props.todo.id} onClick={toggleItem} className={itemClassName}>
      {props.todo.title}
    </li>
  )
}

export default Item;