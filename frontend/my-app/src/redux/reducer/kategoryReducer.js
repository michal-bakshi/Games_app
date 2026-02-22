import {produce} from 'immer'

export const mystore={
  listCat:[
]
}


  
  export const kategoryReducer = produce((state, action) => {
    switch (action.type) {
      case "ADD_CATEGORY":state.listCat.push(action.payload);
         break;
      case "GET_CATEGORY":state.listCat=(action.payload)
         break;
      case "UPDATE_CAT":const updatedCategoryIndex = state.listCat.findIndex(cat => cat._id === action.payload._id);
      state.listCat[updatedCategoryIndex] = {
        ...state.listCat[updatedCategoryIndex],
        ...action.payload,
      };
        break;
      case "DELETE_CAT":state.listCat=state.listCat.filter(x=>x._id!==action.payload);
        break;
      default:
       break;
    }
  },mystore)
  
  

  