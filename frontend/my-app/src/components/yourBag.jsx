import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart,updateQuantity } from '../redux/actions'; // תוכל להתאים לפעולות שלך
import { add_his } from '../redux/historyActions';
import { addHistory } from '../axios/historyAxios';
import { useNavigate } from 'react-router-dom';


export const YourBag = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const cart = useSelector((state) => state.myCart.cart);
  const currentUser=useSelector(state=>state.users.currentUser)
  const isConnect=useSelector(state=>state.users.isConnect)
  const [message,setMessage]=useState("")

  console.log(currentUser+"current user!!!")
  useEffect(() => {
    console.log(cart);  
  }, [cart]);

 
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      dispatch(updateQuantity(id, newQuantity));
    }
  };

  const handleRemoveFromCart = (id) => {
    console.log(id)
      dispatch(removeFromCart(id));
   

  };
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity(item._id, item.quantity - 1));  
    }
  };


  const handleIncrement = (item) => {
    if (item.quantity < 10) {
      dispatch(updateQuantity(item._id, item.quantity + 1));  
    }
  };


  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const saveBuy=()=>{
    if(!isConnect){
        setMessage("אינך מחובר")
        return;
    }
  if(message==""){
    let arr=[];

    for (let i = 0; i < cart.length; i++) {
        arr.push({code:cart[i]._id,name:cart[i].name,sum:cart[i].price*cart[i].quantity})
        
    }
    let obj={codeClent:currentUser._id,arr_game:arr}
       addHistory(obj)
       .then((x)=>{console.log(x);dispatch(clearCart());navigate('/myPersonal');})
       .catch((err)=>{console.log(err)})
}
        
  }

  return (
    <div className="container">
      <h2>הסל שלך</h2>

      {cart.length === 0 ? (
        <p>הסל שלך ריק.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>תמונה</th>
                <th>שם מוצר</th>
                <th>מחיר יחידה</th>
                <th>כמות</th>
                <th>סך הכול</th>
                <th>הסרה</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item,index) => (
                <tr key={index}>
                  <td>
                    <img src={item.pic} alt={item.name} style={{ width: '80px', height: 'auto' }} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} ₪</td>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="form-control w-25"
                        value={item.quantity}
                        min="1"
                        max="10"
                        onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                      />
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{item.price * item.quantity} ₪</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveFromCart(item._id)}
                    >
                      הסר
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

     
      <div className="mt-4">
        <h4>סך הכול: {calculateTotal()} ₪</h4>
        <button className="btn btn-primary mt-2"onClick={saveBuy} >לצאת לסיום רכישה</button>
        {message &&<p className='text text-danger'>{message}</p>}
      </div>
    </div>
  );
};


