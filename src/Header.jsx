import React from 'react'

function Header(props) {
  return (
    <div>
      <h1>hello todo 어플</h1>
      <div style={{ marginBottom: '1rem' }}>해야할일 ! {props.todos.length}개가 있습니다.</div>
    </div>
  )
}

export default Header;