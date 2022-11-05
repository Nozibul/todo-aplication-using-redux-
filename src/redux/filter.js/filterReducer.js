import { STATUSCHANGED, FILTERCOLOR } from "./actionType" ;

const initialState = {
    status: 'ALL',
    color: [] 
}

const filterReducer = (state = initialState, action) =>{
   switch (action.type) {
    case STATUSCHANGED:
       return {
         ...state,
         status: action.payload
       }

    case FILTERCOLOR:
        const { color, changeColor } = action.payload
        switch ( changeColor ) {
            case 'added':
                return{
                   ...state,
                   color : [...state.color, color]
                }
                
            case 'removed':
                return {
                    ...state,
                    color: state.color.filter((existingColor)=> existingColor !== color )
                }
        
            default:
               return state ;
        }
   
    default:
        return state;
   }
}

export default filterReducer;