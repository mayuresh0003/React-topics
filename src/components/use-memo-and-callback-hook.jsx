import React, { useCallback, useMemo, useState } from 'react';
const UseMemoAndCallbackHook = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(100);

    const squaredValue = () => {
        console.log("Expensive calculation...", counter2);

        return counter * counter;
    };

    const squaredValuedUseMemo = useMemo(squaredValue, [counter]);
    const squaredValueUseCallback = useCallback(squaredValue, [counter]);
    return (
        <div className='container'>
            <h1><u>Use Memo and Callback Hook</u></h1>
            <h5>Question1: What is useMemo in react?</h5>
            
                <li>The `useMemo` hook is a React hook that allows you to memoize the result of a computation, preventing unnecessary recalculations on every render.</li>
                <li>
                    It is used to optimize performance by caching the result of a function and returning the cached value when the dependencies have not changed.
                </li>
            
            <br />
            ------------------------------------------OR------------------------------------------
            
                <li>It is a hook used to memoize the result of functions and cache it(saving it in a memory), recalculating it only if the dependencies change.</li>
            
            <br />
            {/* <h2>Squared counter: {squaredValuedUseMemo}</h2> */}
            <button onClick={() => setCounter(counter + 1)}>Increament</button>
            <h2>Counter 2: {counter2}</h2>
            <button onClick={() => setCounter2(counter2 - 1)}>
                Decreament counter 2
            </button>
<br />
<br />
            <h5>Question: When should you use useMemo hook?</h5>
           
                <li>When computing a value is expensive or time-consuming.</li>
                <li>When you want to avoid unnecessary recalculations on every render.</li>
                <li>When you want to optimize performance by caching the result of a function.</li>
                <li>When you want to memoize a value that is derived from props or state.</li>
           
<br />
            <h5>Question: What is the difference between useMemo and useCallback?</h5>
            
                <li>`useMemo` is used to memoize the result of a function, while `useCallback` is used to memoize a function itself.</li>
                <li>`useMemo` returns a cached value, while `useCallback` returns a memoized function.</li>
                <li>`useMemo` is useful for optimizing expensive calculations, while `useCallback` is useful for preventing
                    unnecessary re-renders of child components that depend on the memoized function.</li>
            
<br />
            <h5>Question: How does useMemo differ from useState??</h5>
           
                <li>useMemo memoizes a computed value and rerturns the cache value with out cusing re-renders, while useState manages state and triggers re-renders when the state changes.</li>
            
<br />
            <h5>Question: What is useCallback in react?</h5>
            
                <li>
                    It is  hook to memoize a provided callback function, returning the memoized version of the function.
                </li>
            
<br />
            <h2>Squared counter: {squaredValuedUseMemo}</h2>
            <h2>Squared counter: {squaredValueUseCallback()}</h2>
<br />
            <h5>Question: What happens when you use useCallback with empty dependencies?</h5>
            
                <li>It will returnd the same memoized function on every render, which might be usefull for performance optimization in some cases.</li>
            
<br />
            <h5>Question: When should you not use useCallback or useMemo hook?</h5>
            
                <li>Event handler or Inline functions</li>
                <li>Excessive memory consumption</li>
                <li>Garbage collection issues</li>
            
<br />
            <h4>Ref below code:</h4>
            <pre>
                {`import React, { useCallback, useMemo, useState } from "react";

const UseMemoAndCallbackHook = () => {
  const [counter, setCounter] = useState(0);
  // const squareValue = () => {
  //   return counter * counter;
  // };
  // const SqueareValueUseMemo = useMemo(squareValue, [counter]);
  // const SqueareValueUseMemo = useCallback(squareValue, [counter]);

  const SqueareValueUseMemo = useMemo(() => {
    return counter * counter;
  }, [counter]);

  const SqueareValueUseCallback = useCallback(() => {
    return counter * counter;
  }, [counter]);


  return (
    <div>
      <p>Count value:{counter}</p>
      <p>SqueareValueUseMemo: {SqueareValueUseMemo}</p>
      <p>SqueareValueUseCallback: {SqueareValueUseCallback()}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default UseMemoAndCallbackHook;

`}
            </pre>
        </div>

    )
}

export default UseMemoAndCallbackHook;