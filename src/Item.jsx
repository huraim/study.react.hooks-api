import React from 'react'
import './item.css'

function Item(props) {
  const toggleItem = (e) => {
    const id = e.target.dataset.id;
    props.changeTodoStatus(id);
  }
  
  const itemClassName = props.todo.status === 'done' ? 'active' : '';

  return (
    <li data-id={props.todo.id} onClick={toggleItem} className={itemClassName}>
      {props.todo.title}
    </li>
  )
}

export default Item;