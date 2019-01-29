import action from '../action/todoAction'

const initialState =[
  {
    id: 0,
    text: 'Finish homework',
    description: '',
    completed: false,
    show: false,
    date:'',
    tempTitle: '',
    tempDesc: ''
  }]

const reducer =(state = initialState , action = {})=> {
  switch (action.type) { 
    case 'ADD_TODO':
        state.map(todo=> todo.id )
        return [...state,
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            text: action.text,
            description : action.description,
            date: action.date,
          }
        ];
      break;

    case 'REMOVE_TODO':
      return state.filter(todo =>  todo.id!==action.id)
      break;

    case 'COMPLETE_TODO':
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            completed: !todo.completed,
          } :
          todo
      );

      case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            show: !todo.show,
          } :
          todo
      );
      break;

      case 'CHANGE_TITLE':
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            text: action.text
          } :
          todo
      );
      break;

      case 'CHANGE_DESC':
      return state.map(todo =>
        todo.id === action.id ?
          {
            ...todo,
            description: action.description
          } :
          todo
      );
      break;

      break;
    default:
      return state;
  }
}

export default reducer
