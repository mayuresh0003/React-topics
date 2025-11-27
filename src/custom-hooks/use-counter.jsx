import { useState } from 'react';

const UseCounter = (initialCount=0, step=1) => {

const [count, setCount] = useState(initialCount);

const increment = () => {
 setCount(count + step);
}

const decrement = () => {
  setCount(count - step); 
}

const reset = () => {
    setCount(initialCount);
}

return {
    increment,
    decrement,
    reset,
    count
  };
}

export default UseCounter;