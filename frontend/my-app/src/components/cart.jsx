import React, { useContext } from "react";
import MyContex from "./contex";

export const Cart = () => {
  const { list, removeProductFromCart, updateProductAmount } = useContext(MyContex);

  const handleDelete = (productId) => {
    removeProductFromCart(productId);
  };

  const handleAmountChange = (productId, newAmount) => {
    if (newAmount > 0) {
      updateProductAmount(productId, newAmount);
    }
  };

  return (
    <div>
      <h2> העגלה שלך</h2>
      {list.length === 0 ? (
        <p>העגלה שלך ריקה🫣</p>
      ) : (
        <ul>
          {list.map((product) => (
            <li key={product.id}>
              <div>
                <h4>{product.name}</h4>
                <p>מחיר: ${product.price}</p>
                <div>
                  <label>
                    Quantity:
                    <input
                      type="number"
                      value={product.amount}
                      onChange={(e) => handleAmountChange(product.id, parseInt(e.target.value))}
                      min="1"
                      max="10"
                    />
                  </label>
                </div>
                <p>סכום סופי: ${product.price * product.amount}</p>
                <button onClick={() => handleDelete(product.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
