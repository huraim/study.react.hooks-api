import React from 'react'
import TodoStore from './TodoStore.js';
import Header from './Header.jsx';
import Form from './Form.jsx';
import List from './List.jsx';
import './App.css';

function App() {
  return (
    <TodoStore>
      <Header />
      <Form />
      <List />
    </TodoStore>
  )
}

export default App;
