import { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({}); // Assuming you might want to use state later

    useEffect(() => {
        // This effect runs after the component mounts and whenever the dependencies change
        console.log("Component mounted or updated");
        // You can perform side effects here, such as data fetching or subscriptions
        return () => {
            // This cleanup function runs before the component unmounts or before the effect runs again
            console.log("Cleanup before next effect or unmount");
        };
    }, [
        // dependencies
    ]);

    const fetchUser = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        setUser(data); // Update state with fetched user data
        console.log(data);
    }


    useEffect(() => {
        // Fetch user data when the component mounts
        fetchUser();
    }, []);

    const [seconds, setSeconds] = useState(0);


    useEffect(() => {
        console.log('componentDidMount');
        const interval = setInterval(() => {
            console.log("Updating seconds...");
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000); // 1000 milliseconds = 1 second   
        console.log('componentDidUpdate');
        console.log("Seconds updated to: ", seconds);

        // Cleanup function to clear the interval when the component unmounts or re-run
        return () => {
            console.log('componentWillUnmount');
            clearInterval(interval);
            console.log("Interval cleared");
        }

    }, []); // Dependency array: effect runs when 'seconds' changes

    useEffect(() => {
        console.log('UseEffect here');
        // This effect runs after the component mounts and whenever the dependencies change
        // You can perform side effects here, such as data fetching or subscriptions
    }, []);

    useLayoutEffect(() => {
        console.log('UseLayoutEffect here');
        // This effect runs synchronously after all DOM mutations
        // It is useful for reading layout from the DOM and synchronously re-rendering

    }, [])

    useEffect(() => {
        console.log('UseEffect for document title');
        console.log('componentDidMount');
        document.title = `You clicked ${count} times`;
        console.log('componentDidUpdate');
    }, [count]); // Dependency array: effect runs when 'count' changes

    //     useEffect(() => {
    //         console.log('UseEffect for document title');
    // document.title = `You clicked ${count} times`;
    //     }, []); // Dependency array: effect runs only once after the initial render

    //     useEffect(() => {
    //         console.log('UseEffect for document title');
    // document.title = `You clicked ${count} times`;
    //     }, ); // Dependency array: effect runs after every render

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className='container'>
            <h1>
                <u>UseEffect Hook</u>
            </h1>
            <p>
                You clicked {count} times
            </p>
            <button onClick={handleClick} className='btn btn-primary'>
                Click Me!
            </button>
            <h4>
                Question 1: Explain the useEffect hook in React.
            </h4>
            <li>The useEffect hook is a built-in React hook that allows you to perform side effects in functional components.</li>
            <li>
                UseEffect is a hook used in functional components to handle side effect after redenring, such as data fetching, subscriptions, or manual DOM manipulation.
            </li>
            <br />
            <h4>
                Question 2: Why is dependency array used in useEffect?
            </h4>

            <li>when it empty, the effect runs only once after the initial render</li>
            <li>when these value inside it effect runs when 'count' changes</li>
            <li>If removed, the effect runs after every render.</li>
            <li>Handling dependencies ensures that the effect runs only when necessary, preventing unnecessary re-renders and improving performance.</li>
            <br />

            <h4>
                Question 3: Example of useEffect for data fetching.
            </h4>

            <li>The useEffect hook can be used to fetch data from an API when the component mounts.</li>
            <li>It can also be used to clean up resources, such as unsubscribing from a service or clearing timers, when the component unmounts or before the effect runs again.</li>

            <p>Name: {user.name} </p>
            <p>Email: {user.email} </p>
            <br />
            <h4>
                Question 4: Convert major lifecycle method to useEffect and explain.
            </h4>
            {
                // Prev lessons 4.1
            }

            <h4>
                Question 5: How to perform cleanup in useEffect? Explain with an example.
            </h4>

            <li>Cleanup in useEffect is done by returning a function from the effect callback.</li>
            <li>you can return a cleanup function inside useeffect, ehich runs before the effect re-run or when the component unmounts.</li>
            <li>This is useful for cleaning up subscriptions or event listeners.</li>

            <p>Seconds: {seconds}</p>

            <h4>
                Question 6: Explain useLayoutEffect and how it differs from useEffect.
            </h4>
            <li>useLayoutEffect is similar to useEffect, but it runs synchronously after all DOM mutations.</li>
            <br />
            <h5>useEffect: </h5>

            <li>Asyncronous: Run after the reder is committed to the screen.</li>
            <li>Good for performanc: Does not block the browser from painting changes on the screen.</li>


            <pre>
                {
                    `useEffect(() => {
        console.log('UseEffect here');

        // This effect runs after the component mounts and whenever the dependencies change
        // You can perform side effects here, such as data fetching or subscriptions

    }, []);`
                }
            </pre>
            <br />
            <h5>useLayoutEffect:</h5>

            <li>
                Synchronous : Run synchronously immediately after the DOM has been updated but before the browser components its rendered.
            </li>
            <li>
                Good for reading layout from the DOM and synchronously re-rendering.
            </li>
            <li>
                Potentions blocking: can potentially cause delays in the rendering process if the operations are heavy.
            </li>

            <pre>
                {
                    `useLayoutEffect(() => {
        console.log('UseLayoutEffect here');

        // This effect runs synchronously after all DOM mutations
        // It is useful for reading layout from the DOM and synchronously re-rendering

    }, [])`
                }
            </pre>
            <br />
            <h4>How to written useEffect:</h4>
            <pre>
                {`
                const UseEffectHook = () => {
                const [user, setUser] = useState({});

                useEffect(
                    () => {
                        // side effect code goes here

                return () => {
                        // Cleanup code (optional)
                        // Runs on component unmount or before re-runs
                };
            },
            [
                // dependencies
            ]
            );
                `}
            </pre>

            <h4>Ref below example code 1:</h4>
            <pre>
                {
                    `import { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectHook = () => {

    const [user, setUser] = useState({}); // Assuming you might want to use state later

    const fetchUser = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        setUser(data); // Update state with fetched user data
        console.log(data);
    }


    useEffect(() => {
        // Fetch user data when the component mounts
        fetchUser();
    }, []);

    const [seconds, setSeconds] = useState(0);
    // This effect runs every second to update the seconds state

     useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((second) => second + 1);
        }, 1000); // 1000 milliseconds = 1 second   
        console.log("Seconds updated to: ", seconds);

        // Cleanup function to clear the interval when the component unmounts or re-run
        return () => {
            clearInterval(interval);
            console.log("Interval cleared");
        }

    }, []);

    return (
        <div className= 'container' >

        <h4>
        Question 3: Example of useEffect for data fetching.
            </h4>
            < p > Name: { user.name } </>
                < p > Email: { user.email } </>
                    <h4>
                Question 5: How to perform cleanup in useEffect ? Explain with an example.
            </h4>
        < p > Seconds: { seconds } </>
            </div>
    );
}

export default UseEffectHook;`
                }
            </pre>

            <h4>Ref below example code 2:</h4>
            <pre>
                {
                    `import React, { useState, useEffect } from "react";

function CounterWithTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render when 'count' changes
    document.title = \`You clicked \${count} times\`;
    // No cleanup needed here
  }, [count]); // Dependency array: effect runs when 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default CounterWithTitle;`
                }
            </pre>

        </div>
    );
}

export default UseEffectHook;