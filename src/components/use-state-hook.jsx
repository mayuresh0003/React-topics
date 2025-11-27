import { useState } from "react";

const UseStateHook = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    // The useState hook is used to declare state variables in functional components.
    // It returns an array with two elements: the current state value and a function to update it.
    // The first element is the current state value, and the second element is a function that can be used to update the state.
    // The useState hook can be used to manage primitive values, objects, arrays, and more.

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    console.log(userData);


    const handleIncrement = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    };
    // The above code will not increment the count by 3 as expected.
    // This is because setState is asynchronous and the state updates are batched.
    // To fix this, we can use the functional form of setState which takes the previous state as an argument.
    // The correct way to increment the count by 3 would be:
    // const handleIncrement = () => {
    //     setCount((prev) => prev + 3);    
    // };

    return (
        <div className="container">
            <h1>
                <u>useState Hook</u>
            </h1>
            <h4>Question 1: Explain class based components in React.</h4>
            - useState is a hook in React that allows functional components to manage state by declaring state variables and updating them.
            <br />

            <span>count: {count}</span>
            <br />
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <h4>Question 2: What is the output and how to fix this?</h4>
            <button onClick={handleIncrement}>Increment by 3</button>

            <h4>
                Question 3: What is two way data binding and how can you achieve it in React?
            </h4>
            <p>
                <li>It is a concept that allows the synchronization of the data between the model (or state) and the view in both directions.</li>
                <li>You can achieveit by comboning state management with controlled components in React.</li>
                <li>Two-way data binding means that changes in the UI update the state, and changes in the state update the UI. In React, you can achieve this by binding the value of an input to a state variable and updating the state with the input's onChange event. For example:</li>
            </p>
            <br />
            <p>Input value: {value}</p>
            <input value={value} onChange={(e) => setValue(e.target.value)} />

            <h4>
                Question 4: Build a form containing First name, last name and email. Use only one state to manage all fields.
            </h4>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted with data:", userData);
                // Here you can handle form submission, e.g., send data to an API
            }}>
                <input placeholder="Enter First Name" type="text" name="firstName" onChange={handleInputChange} />
                <input placeholder="Enter Last Name" type="text" name="lastName" onChange={handleInputChange} />
                <input placeholder="Enter Email" type="email" name="email" onChange={handleInputChange} />
                <button>Submit</button>
            </form>
<p>
    userName: {userData.firstName} {userData.lastName} <br />
    Email: {userData.email}
</p>

<h4>Ref below code</h4>
<pre>
    {
        `import { useState } from "react";

const UseStateHook = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    // The useState hook is used to declare state variables in functional components.
    // It returns an array with two elements: the current state value and a function to update it.
    // The first element is the current state value, and the second element is a function that can be used to update the state.
    // The useState hook can be used to manage primitive values, objects, arrays, and more.

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    console.log(userData);


    const handleIncrement = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    };
    // The above code will not increment the count by 3 as expected.
    // This is because setState is asynchronous and the state updates are batched.
    // To fix this, we can use the functional form of setState which takes the previous state as an argument.
    // The correct way to increment the count by 3 would be:
    // const handleIncrement = () => {
    //     setCount((prev) => prev + 3);    
    // };

    return (
        <div className="container">
            <h4>Question 1: Explain class based components in React.</h4>

            <span>count: {count}</span>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h4>Question 2: What is the output and how to fix this?</h4>
            <button onClick={handleIncrement}>Increment by 3</button>
            <h4>
                Question 3: What is two way data binding and how can you achieve it in React?
            </h4>

            <p>Input value: {value}</p>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <h4>
                Question 4: Build a form containing First name, last name and email. Use only one state to manage all fields.
            </h4>

            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted with data:", userData);
                // Here you can handle form submission, e.g., send data to an API
            }}>
                <input placeholder="Enter First Name" type="text" name="firstName" onChange={handleInputChange} />
                <input placeholder="Enter Last Name" type="text" name="lastName" onChange={handleInputChange} />
                <input placeholder="Enter Email" type="email" name="email" onChange={handleInputChange} />
                <button>Submit</button>
            </form>
<p>
    userName: {userData.firstName} {userData.lastName} <br />
    Email: {userData.email}
</p>
        </div>
    )
};

export default UseStateHook;`
    }
</pre>
        </div>
    )
};

export default UseStateHook;