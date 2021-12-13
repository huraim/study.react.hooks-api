export const todoReducer = (todos, {type, payload}) => {
  switch (type) {
    case 'ADD_TODO':
      return [...todos, {'id':todos.length, 'title':payload, 'status':'todo'}];
  
    case 'SET_INIT_DATA':
      return payload;

    case 'CHANGE_TODO_STATUS':
      return todos.map(todo => {
        if(todo.id === +payload) { //payload(id) 문자열을 숫자로 +id
          if(todo.status === "done") {
            console.log(todo.status)
            todo.status = "todo";
          } 
          else {
            todo.status = "done";
          }
        }
        return todo;
      });

    default:
      break;
  }
}