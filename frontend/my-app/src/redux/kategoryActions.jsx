import kategoryReducer  from "./reducer/kategoryReducer"

export const add_cat=(cat)=>{
  return {type:"ADD_CATEGORY",payload:cat}
}
export const getAllCategory=(myData)=>{
  return {type:"GET_CATEGORY",payload:myData}
}
export const updateCategory=(updateCat)=>{
  return {type:"UPDATE_CAT",payload:updateCat}
}
export const deleteCategory=(id)=>{
  return {type:"DELETE_CAT",payload:id}
}