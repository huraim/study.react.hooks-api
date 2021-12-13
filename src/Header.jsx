import React, {useContext} from 'react'
import {TodoContext} from './TodoStore.js'

function Header() {
  const {todos} = useContext(TodoContext); //useContext todos 함수 props 없이 전달받음
  return (
    <>
      <h1>hello todo 어플</h1>
      <div style={{ marginBottom: '1rem' }}>해야할일 ! {todos.filter(v=>v.status==='todo').length}개가 있습니다.</div>
    </>
  )
}

export default Header;