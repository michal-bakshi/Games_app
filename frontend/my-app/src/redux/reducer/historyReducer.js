import {produce} from 'immer'
export const myhistory = {
  arr:[
  ]
}

 export const HistoryReducer = produce((state ,action) => {
    switch (action.type) {
      case "ADD_HIS":state.arr.push(action.payload);
        break;
        // case "GET_HIS":state.arr=(action.payload)
        // break;
     default:
        break;
    }
  },myhistory)