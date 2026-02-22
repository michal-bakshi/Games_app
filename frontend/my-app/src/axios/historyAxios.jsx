import axios from 'axios'

const url=process.env.REACT_APP_API_URL+"/history"

export const addHistory=(obj)=>{
    return axios.post(`${url}/add/`,obj)

}
export const getAllBuy=(id)=>{
    return axios.get(`${url}/getAll/${id}`)
}