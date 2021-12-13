import React, {useEffect, useReducer} from 'react';
import useFetch from './useFetch.js'
import {todoReducer} from './reducer.js'

export const TodoContext = React.createContext(); //useContext

const TodoStore = (props) => {

  const [todos, dispatch] = useReducer(todoReducer, []); //useReducer
  const setInitData = (initData) => { //useReducer 초기값
    dispatch({type:'SET_INIT_DATA', payload:initData})
  }

  const loading = useFetch(setInitData, 'http://localhost:8080/todos'); //원래 setTodsos

  useEffect( () => {
    console.log("새로운 내용 렌더링", todos)
  }, [todos]) //todos 변화만 감지 (추가랑 클릭 감지)

  return (
    <TodoContext.Provider value={ {todos, loading, dispatch} }>
      {props.children} {/* 부모 컴포넌트의 자식 컴포넌트들 전부 소환 */}
    </TodoContext.Provider>
  )
}

export default TodoStore;
