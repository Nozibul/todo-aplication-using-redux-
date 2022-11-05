import { STATUSCHANGED, FILTERCOLOR } from "./actionType" ;

export const statusChange = (status) =>{
   return {
     type: STATUSCHANGED,
     payload: status
   }
};

export const filterColor = (color, changeColor) =>{ // changeColor receive color select or color remove
   return {
     type: FILTERCOLOR,
     payload:{
        color,
        changeColor,
     }
   }
};