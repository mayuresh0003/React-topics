
import { useReducer } from 'react';
const UseReducerHook = () => {
    const countReducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    ...state,
                    count: state.count + 1
                };
            case 'DECREMENT':
                return {
                    ...state,
                    count: state.count - 1
                };
            default:
                return state;
        }
    };

    const initialCount = {
        count: 0,
    };

    const [state, dispatch] = useReducer(countReducer, initialCount);
    return (
        <div className='container'>
            <h1>
                <u>useReducer Hook</u>
            </h1>
            <h5>Question: What is userReducer in react?</h5>
           
              <li>It is hook for managing complex state logic by utilizing a reducer function.</li>
              <li>Alternative to useState and provides a way to update state based on defined actions.</li>
              
           
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <h4>Ref example code:</h4>
            <pre>
              {`import React, { createContext, useReducer } from "react";

const UseReducerFunction = () => {
  const countReducerFunction = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { ...state, count: state.count + 1 };

      case "Decrement":
        return { ...state, count: state.count - 1 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducerFunction, { count: 0 });

  return (
    <div>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducerFunction;
`}
            </pre>
            <h5>Question: When should you use useReducerinsted of useState?</h5>
            
              <li>When managing complex state transition or logic that involves multiple sub-values in preduic</li>
              <li>when state logic follows a pattern or when multiple actions need to update the state in predictable way.</li>
            
            
            <h5>Question: Give example of useReducer for shoping cart state management?</h5>

            <ShoppingCart />
            <h4>Ref code</h4>
            <pre>
              {`import React, { useReducer } from "react";

const initialState = {
  cart: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      break;
  }
};

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}
            >
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>

      {products.map((prod) => (
        <button
          key={prod.id}
          onClick={() => dispatch({ type: "ADD_ITEM", payload: prod })}
        >
          {prod.name}
        </button>
      ))}
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
`}
            </pre>
        </div>
    );
};

const initialState = {
    cart: []
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      break;
  }
};


const products = [
  {id: 1, name: "Product 1"},
  {id: 2, name: "Product 2"},
  {id: 3, name: "Product 3"},
];

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className='container'>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button
              onClick={() => dispatch({type: "REMOVE_ITEM", payload: item})}
            >
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>

      {products.map((prod) => (
        <button
          key={prod.id}
          onClick={() => dispatch({type: "ADD_ITEM", payload: prod})}
        >
          {prod.name}
        </button>
      ))}
      <button onClick={() => dispatch({type: "CLEAR_CART"})}>Clear Cart</button>
    </div>
  );
};


export default UseReducerHook;