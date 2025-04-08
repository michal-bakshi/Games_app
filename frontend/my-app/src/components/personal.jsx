import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import { getAllBuy } from "../axios/historyAxios";
import { Link, useNavigate } from "react-router-dom";
export const Personal = () => {
 const [yourHistory, setYourHistory] = useState([]);
 const currentUser = useSelector(state => state.users.currentUser);
 const navigate=useNavigate()
 useEffect(() => {
    const fetchData = async () => {
        if(currentUser._id!=null)
          setYourHistory((await getAllBuy(currentUser._id)).data); 
    
    };
  
    fetchData(); 
  }, [currentUser._id]); 

  const moveTo=(item)=>{
    console.log("in move ",item);
    navigate(`/morePersonal/${item.dateBuy}`, {state:{name:item.arr_game}})
  }
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>תאריך</th>
            <th>שם מוצר</th>
            <th>סך הכול</th>
          </tr>
        </thead>
        <tbody>
         
          {yourHistory.length > 0 ? (
            yourHistory.map((item, index) => (
              <React.Fragment key={index}>
                <p>{item.dateBuy}</p>
                <p className="btn btn-primary" onClick={()=>moveTo(item)} >לפרטי ההזמנה</p>
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="3">אין היסטוריה זמינה</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
