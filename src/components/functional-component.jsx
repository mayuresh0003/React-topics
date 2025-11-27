import { useState } from "react";

export default function CounterFunction() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    return (

        <div className="container">
            <h4>Question 2: What are functional components in React?</h4>
            <p>
                Functional components are stateless components defined as JavaScript functions. They can accept props and return JSX. With the introduction of hooks, functional components can now manage state and side effects, making them more powerful and versatile.
            </p>
            <h4>Question 3: How do you create a functional component in React?</h4>
            <p>
                A functional component is created by defining a JavaScript function that returns JSX. It can accept props as an argument. Here's an example:
            </p>
            <pre>
                {`
                export default function CounterFunction() {
                    const [count, setCount] = useState(0);

                    const incrementCount = () => {
                    setCount(count + 1);
                    }
                    return (
                        <div className="container">
                            <p>Count: {count}</p>
                            <button onClick={incrementCount}>Increment In Function</button>
                        </div>
                    );
`}
            </pre>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment In Function</button>
        </div>
    );
}