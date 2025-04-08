import { useEffect } from "react"
import {useDispatch, useSelector } from "react-redux"
import { getAllCat,deleteCatById } from "../axios/categoryAxios"
import { getAllCategory ,deleteCategory} from "../redux/kategoryActions"
import { useNavigate } from "react-router-dom"



export const Listkategori=()=>{
    let listC=useSelector(x=>x.kategory.listCat)
    const isManeger=useSelector(x=>x.users.isManeger)
      const navigate=useNavigate()
    const myD =useDispatch()
    
    useEffect(()=>{  
    if(listC!=null && listC.length==0)
    {    
    debugger
     getAllCat()
     .then((x)=>myD(getAllCategory(x.data)))
     .catch((err)=>console.log(err));
    }
    },[listC, myD])
    const updateCat=(id)=>{
        const fromUpdate=id
        navigate('/myAddKategory', { state: {fromUpdate} })
      
    }
    const deleteCat=(id)=>{
        deleteCatById(id)
        .then(()=>{myD(deleteCategory(id))})
        .catch((err)=>console.log(err));
    }
    
    return<div className="container"> 
        <table className="table">
        <thead>
            <tr>
                <th>שם קטגוריה</th>
                <th>קוד קטגוריה</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {listC.map((x,index)=>(
            <tr key={index}>
                <td>{x.name}</td>
                <td>{x._id}</td>
             {isManeger&& <td><button onClick={()=>deleteCat(x._id)} className="btn btn-danger">מחיקה</button></td>}
             {isManeger&&<td><button onClick={()=>updateCat(x._id)} className="btn btn-primary">עדכון</button></td>}
            </tr>))}

        </tbody>
    </table>
    </div>
}