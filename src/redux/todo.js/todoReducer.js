import { ADDED, TOGGLE, DELETED, ALLCLEAR, ALLCOMPLETE, COLORSELECTED} from './actionType'

const initialState = [
    {
        id:1,
        text: 'Learn redux',
        completed: true,
        
    },
    
    {
        id:2,
        text: 'Learn react',
        completed: false,
        color: 'green'
    },

]; 

const nextTodoId = (todos) =>{
   const maxId = todos.reduce((maxId, todo)=> Math.max(maxId, todo.id), 0)
    return maxId + 1 ;
}

const todoReducer = (state = initialState, action) =>{

    switch (action.type) {
        case ADDED:
            return [
                ...state,
                { id: nextTodoId(state) }
            ]
        case TOGGLE:
            return state.map((todo)=> {
               if(todo.id === action.payload){
                  return {
                    ...todo,
                    completed : !todo.completed,
                  }
               }
               return {
                 ...todo
               }
               
            })

        case COLORSELECTED:
            const { todoId ,color} = action.payload ;
            return state.map((todo)=> {
               if(todo.id === todoId){
                  return {
                    ...todo,
                    color: color
                  }
               }
               return {
                 ...todo
               }
               
            })

        case DELETED:
            return state.filter((todo)=> todo.id !== action.payload)
    
        case ALLCOMPLETE: 
             return state.map((todo)=> {
                return {
                    ...todo,
                    completed : true ,
                }
             })

        case ALLCLEAR: 
             return state.filter((todo)=> !todo.completed )

        default:
            return state;
    }
};

export default todoReducer ;