import { ADDED, TOGGLE, DELETED, ALLCLEAR, ALLCOMPLETE, COLORSELECTED} from './actionType'

export const added = (todoText) =>{
    return {
       type: ADDED,
       payload: todoText,
    }
};

export const toggle = (todoId) =>{
    return {
       type: TOGGLE,
       payload: todoId,
    }
};

export const colorSelect = (todoId, color ) =>{
   return {
      type: COLORSELECTED,
      payload:{
         color,
         todoId,
      }
   }
};

export const deleted = (todoId) =>{
    return {
       type: DELETED,
       payload: todoId,
    }
};

export const clearAll = () =>{
    return {
       type: ALLCLEAR
    }
};

export const completeAll = () =>{
    return {
       type: ALLCOMPLETE
    }
};