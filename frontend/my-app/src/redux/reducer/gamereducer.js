import {produce} from 'immer'
export const mystore = {
  listGame:[
  ]
}

 export const GamesReducer = produce((state ,action) => {
    switch (action.type) {
      case "ADD_GAME":state.listGame.push(action.payload);
        break;
        case "GET_GAMES":state.listGame=(action.payload)
        break;
     case "UPDATE_GAME":const updatedGameIndex = state.listGame.findIndex(game => game._id === action.payload._id);
     state.listGame[updatedGameIndex] = {
       ...state.listGame[updatedGameIndex],
       ...action.payload,
     };
       break;
     case "DELETE_GAME":{state.listGame=state.listGame.filter(x=>x._id!=action.payload);}
     default:
        break;
    }
  },mystore)