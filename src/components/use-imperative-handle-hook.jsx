import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHandleHook = () => {

    const childRef = useRef(null);
    return (
        <div className='container'>
            <h1><u>useImperativeHandle Hook</u></h1>
            
                <li>The `useImperativeHandle` hook is used in React to customize the instance value that is exposed when using `ref`. It allows you to control what properties and methods are available on the ref object, which can be useful for exposing imperative methods to parent components.</li>
                <li>It is typically used in conjunction with `forwardRef` to create a ref-enabled component that can expose specific methods or properties to its parent.</li>
            
        <br />
            <h5>How do you call a function of child component from parent component?</h5>
            <li>To call a function of a child component from a parent component, you can use the `useImperativeHandle` hook in combination with `forwardRef`. This allows the parent to access methods defined in the child component.</li>
            <br />
            <button onClick={() => childRef.current.focusInput()}>Focus on input</button>
            <ChildComponent ref={childRef}/>
            <br />
            <br />
            <h5>Code Example:</h5>
            <p>This example demonstrates how to use the `useImperativeHandle` hook to expose a method from a child component to a parent component. The parent can call the `focusInput` method of the child component to focus on an input field.</p>
            <h5>Code:</h5>
            <pre>
                {`import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHandleHook = () => {

    const childRef = useRef(null);
    return (
        <div>
            <button onClick={() => childRef.current.focusInput()}>Focus on input</button>
            <ChildComponent ref={childRef}/>
        </div>
    )
}

const ChildComponent = forwardRef((props, ref) => {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    }
    useImperativeHandle(ref , () => {
        return {
            focusInput,
        }
    });
    return <input type="text" ref={inputRef}/>
})

export default UseImperativeHandleHook;`}
            </pre>
        </div>
    )
}

const ChildComponent = forwardRef((props, ref) => {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    }
    useImperativeHandle(ref , () => {
        return {
            focusInput,
        }
    });
    return <input type="text" ref={inputRef}/>
})

export default UseImperativeHandleHook;