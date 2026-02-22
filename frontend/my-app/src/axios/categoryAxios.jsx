import axios from 'axios'

const url=process.env.REACT_APP_API_URL+"/category"
console.log(url)

export const addCategory=(obj)=>{
    return axios.post(`${url}/add`,obj)

}
export const getAllCat=()=>{
    return axios.get(`${url}/getAll`)
}

export const update=(id,updateCat)=>{
    return axios.put(`${url}/update/${id}`,updateCat)
}
export const deleteCatById=(id)=>{
    return axios.delete(`${url}/delete/${id}`)

}
