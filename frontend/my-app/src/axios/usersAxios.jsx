import axios from 'axios'

const url="http://localhost:9090/user"

export const addUser=(user)=>{
    return axios.post(`${url}/add`,user)

}
export const login=(name,password)=>{
    return axios.post(`${url}/login`,{name,password})
}