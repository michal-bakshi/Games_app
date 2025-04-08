import {useDispatch, useSelector } from "react-redux"
import { deleteGameById, getAllGames, getGameByKatId } from "../axios/gameAxios";
import { deleteGame, getTheAllGames } from "../redux/gameActions";
import { getAllCat } from "../axios/categoryAxios"
import { getAllCategory } from "../redux/kategoryActions"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListGame=()=>{
  
    let listG=useSelector(x=>x.game.listGame)
    const [list,setlist]=useState([...listG])
    const isManeger=useSelector(x=>x.users.isManeger)
  
    const cart = useSelector((state) => state.myCart.cart);
    const kat=useSelector(x=>x.kategory.listCat)
    const myD=useDispatch()
    const navigate=useNavigate()
   useEffect(()=>{  
       if(listG!=null && listG.length==0)
       {    
        getAllGames()
        .then((x)=>{
          myD(getTheAllGames(x.data));
          setlist([...x.data])
        })
        .catch((err)=>console.log(err));
       }

      if(kat!=null && kat.length==0){
        getAllCat()
             .then((x)=>myD(getAllCategory(x.data)))
             .catch((err)=>console.log(err));
            
      }
       },[listG, myD,kat])
       const deleteGameFunc=(id)=>{
        deleteGameById(id)
          .then(()=>{myD(deleteGame(id))})
          .catch((err)=>console.log(err));
       }
    
       const updateGameFunc=(id)=>{
        console.log("update thit game!!")
        const fromUpdate=id
        navigate('/myAddGame', { state: {fromUpdate} })
       }
   
      const moreDetails=(game)=>{
        navigate('/moreDetails', { state: {game} })

      }
      const search=(id)=>{
        getGameByKatId(id)
        .then(x=>{
          setlist(x.data)
        })
        .catch(e=>console.log(e))
      }
    return<div className="container m-3">
      <h1>משחקים</h1>
      <select className="m-2 form-select" onChange={(e)=>search(e.target.value)}>
        {kat.map((x)=><option value={x._id}>{x.name}</option>)}
      </select>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {list.length === 0 &&
        <p> אין משחקים בקטגוריה עדיין...</p>}
      {list.map((x, index) => (
        <div key={index} className="col">
          <div className="card h-100 shadow-sm">
            <div className="d-flex justify-content-center">
            <img  style={{width:"150px",height:"100px"}}src={`http://localhost:9090/${x.pic}`} className="card-img-top " alt={`Image for ${x.name}`} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{x.name}</h5>
              <p className="card-text">מחיר: {x.price} ₪</p>
              {/* <p className="card-text">קטגוריה: {x.code_Category}</p> */}
              {/* <button>פרטים נוספים</button> */}
              <button onClick={()=>moreDetails(x)} className="m-1 btn btn-primary">פרטים נוספים</button>
              {isManeger&&<button onClick={()=>deleteGameFunc(x._id)} className="m-1 btn btn-danger" >מחיקה</button>}
             {isManeger&& <button onClick={()=>updateGameFunc(x._id)} className="m-1 btn btn-primary" >עדכון </button>}

            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
}