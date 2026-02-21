import {produce} from 'immer'

export const initialState = {
    cart: [ ]
  };
  
export const cartReducer = produce((state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingProduct = state.cart.find(item => item._id === action.payload._id);
        if (existingProduct) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item._id === action.payload._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item._id !== action.payload),
        };
  
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(item =>
            item._id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
        case 'CLEAR_CART':
          return {
            ...state,
            cart: [],
          };
  
      default:
        return state;
    }
  },initialState);
  

  