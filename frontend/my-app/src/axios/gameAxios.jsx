import axios from 'axios'

const url=process.env.REACT_APP_API_URL+"/game"

export const addGame=(obj)=>{
    return axios.post(`${url}/add`,obj)

}
export const getAllGames=()=>{
    return axios.get(`${url}/getAll`)
}

export const update=(id,updateGame)=>{
    return axios.put(`${url}/update/${id}`,updateGame)
}
export const deleteGameById=(id)=>{
    return axios.delete(`${url}/delete/${id}`)

}
export const getGameByKatId=(id)=>{
    return axios.get(`${url}/getByCaterory/${id}`)
}

