import axios from 'axios'

const url="http://localhost:9090/history"

export const addHistory=(obj)=>{
    return axios.post(`${url}/add/`,obj)

}
export const getAllBuy=(id)=>{
    return axios.get(`${url}/getAll/${id}`)
}