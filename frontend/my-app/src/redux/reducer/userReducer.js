import {current, produce} from 'immer'
import { login } from '../../axios/usersAxios'

export const myUsers={
//   users:[
// ],
manager:{name:"מנהל",password:"1234"},
isConnect:false,
isManeger: false, 
currentUser:{}
}
  
export const userReducer = produce((state, action) => {
     switch (action.type) {
      case "REGISTATION":state.isConnect=true;
         state.currentUser=action.payload

         break;
      case "LOG_IN":
        if(action.payload.x=="m"){
            state.isManeger=true
            state.isConnect=true
        }
        else if(action.payload.x=="u"){
            state.isConnect=true
            state.isManeger=false
            state.currentUser=action.payload.user
        }
   
          break;
    
      default:
       break;
    }
  },myUsers)