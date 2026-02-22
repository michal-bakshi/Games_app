import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { config } from '../config';
import { clearCart, removeFromCart, updateQuantity } from '../redux/actions';
import { addHistory } from '../axios/historyAxios';

function cartItemImageUrl(pic) {
  if (!pic) return '';
  if (pic.startsWith('http')) return pic;
  return config.imageUrl(pic);
}

export function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.myCart.cart);
  const currentUser = useSelector((state) => state.users.currentUser);
  const isConnect = useSelector((state) => state.users.isConnect);
  const [message, setMessage] = useState('');

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      dispatch(updateQuantity(id, newQuantity));
    }
  };

  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleDecrement = (item) => {
    if (item.quantity > 1) dispatch(updateQuantity(item._id, item.quantity - 1));
  };
  const handleIncrement = (item) => {
    if (item.quantity < 10) dispatch(updateQuantity(item._id, item.quantity + 1));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!isConnect) {
      setMessage('אינך מחובר');
      return;
    }
    setMessage('');
    const arr_game = cart.map((item) => ({
      code: item._id,
      name: item.name,
      sum: item.price * item.quantity,
    }));
    addHistory({ codeClent: currentUser._id, arr_game })
      .then(() => {
        dispatch(clearCart());
        navigate('/myPersonal');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <div className="cart-page">
        <h2>הסל שלך</h2>
        {cart.length === 0 ? (
          <p className="cart-empty-msg">הסל שלך ריק.</p>
        ) : (
          <>
            <div className="data-table-wrapper">
              <table className="table data-table">
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
                {cart.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <img
                        src={cartItemImageUrl(item.pic)}
                        alt={item.name}
                        className="cart-item-img"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price} ₪</td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDecrement(item)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="form-control form-control-sm text-center"
                          style={{ width: '3rem' }}
                          value={item.quantity}
                          min={1}
                          max={10}
                          onChange={(e) =>
                            handleQuantityChange(item._id, parseInt(e.target.value, 10))
                          }
                        />
                        <button
                          type="button"
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
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemove(item._id)}
                      >
                        הסר
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <div className="cart-total-box">
              <h5>סך הכול: {total} ₪</h5>
              <button type="button" className="btn btn-primary mt-2" onClick={handleCheckout}>
                לסיום רכישה
              </button>
              {message && <p className="text-danger mt-2 mb-0">{message}</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
