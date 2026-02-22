import axios from 'axios'

const url=process.env.REACT_APP_API_URL+"/user"

export const addUser=(user)=>{
    return axios.post(`${url}/add`,user)

}
export const login=(name,password)=>{
    return axios.post(`${url}/login`,{name,password})
}