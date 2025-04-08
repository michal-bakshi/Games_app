export const add_game=(game)=>{
    return {type:"ADD_GAME",payload:game}
  }
  export const getTheAllGames=(myData)=>{
    return {type:"GET_GAMES",payload:myData}
  }
  export const updateGame=(updateCat)=>{
    return {type:"UPDATE_GAME",payload:updateCat}
  }
  export const deleteGame=(id)=>{
    return {type:"DELETE_GAME",payload:id}
  }