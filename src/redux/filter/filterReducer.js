import { STATUSCHANGED, FILTERCOLOR } from "./actionType" ;

const initialState = {
    status: 'ALL',
    colors: [] 
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
                   colors: [...state.colors, color]
                }
                
            case 'removed':
                return {
                    ...state,
                    colors: state.colors.filter((existingColor)=> existingColor !== color )
                }
        
            default:
               return state ;
        }
   
    default:
        return state;
   }
}

export default filterReducer;