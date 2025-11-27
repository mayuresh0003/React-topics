
import { useEffect, useRef, useState } from 'react';

const UseRefHook = () => {
    const [count, SetCount] = useState(0);

    const ref = useRef(0);

    const inputRef = useRef(null);
    console.log('inputRef:', inputRef.current);
    // useRef can be used to access DOM elements directly

    useEffect(() => {
        inputRef.current.focus();
        // This will set focus to the input element when the component mounts
    }, [])

    return (
        <div className='container'>
            <h1>
                <u>useRef Hook</u>
            </h1>

            <h4>
                Question 1: What is useRef in react?
            </h4>
            <u>
                <li>useRef is a hook used to create a mutable reference that persists across renders.</li>
                <li>It returns a mutable object with a current property.</li>
            </u>

            <p>Ref value: {ref.current}</p>
            <button onClick={() => {
                ref.current += 1;
            }}>
                Increament Ref
            </button>

            <p>State value: {count}</p>
            <button onClick={() => {
                SetCount(count + 1);
            }}>
                Increament State
            </button>

            <h4>
                Question 2: When would you use useRef?
            </h4>
            <u>
                <li>Accessing DOM element or managing focus.</li>
                <li>Storing mutable values that do not trigger re-renders.</li>
                <li>Caching values to avaoid re-initialization on re-renders.</li>
            </u>
            {/* <input ref={inputRef} />
            <button onClick={() => {
                inputRef.current.focus();
                inputRef.current.value = 'Hello, World!';
                // This will set focus to the input element
            }}>Set Focus</button> */}

            <h4>Question 3: How do you access A DOM element using useRef?</h4>
            <input ref={inputRef} />

            <h4>
                Question 4: What is the difference between useRef and useState?
            </h4>
           
            <h4>useState</h4>
            <li>Manage state and triggers re-renders when its value changes.</li>
            <li>When you update it using setSateValue, then component re-renders, and the updated value is reflected in the UI.</li>
           
            <h4>useRef</h4>
            <li>Holds a mutable value (current) that persists across renders without triggering re-renders.</li>
            <li>When you update it (refValue.current = ...), the component does not re-render, but the updated value is still accessible across renders.</li>

            <h4>Ref example code:</h4>
            <pre>
                {`
import { useEffect, useRef, useState } from 'react';

const UseRefHook = () => {
    const [count, SetCount] = useState(0);

    const ref = useRef(0);

    const inputRef = useRef(null);
    console.log('inputRef:', inputRef.current);
    // useRef can be used to access DOM elements directly

    useEffect(() => {
        inputRef.current.focus();
        // This will set focus to the input element when the component mounts
    }, [])

    return (
        <div>
            <p>Ref value: {ref.current}</p>
            <button onClick={() => {
                ref.current += 1;
            }}>
                Increament Ref
            </button>

            <p>State value: {count}</p>
            <button onClick={() => {
                SetCount(count + 1);
            }}>
                Increament State
            </button>

            <h4>Question 3: How do you access A DOM element using useRef?</h4>
            <input ref={inputRef} />
        </div>
    )
}

export default UseRefHook;`}
            </pre>
        </div>
    )
}

export default UseRefHook;