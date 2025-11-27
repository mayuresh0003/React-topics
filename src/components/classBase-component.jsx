import React from 'react';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div className='container'>
                <h4>Question: What are class components in React?</h4>
                
                    <li>way to create using ES6 classes</li>
                    <li>can have state and lifecycle methods</li>
                    <li>can use `this` keyword to access component properties and methods</li>
                    <li>can contain state and have access to lifecycle method, which get executed at various point in a component's life cycle.</li>
                
                <br />
                <h4>Question: How do you create a class component in React?</h4>
                A class component is created by defining a class that extends React.Component and implementing a render method that returns JSX. Here's an example:
                <pre>
                    {
                        `class CounterClass extends React.Component {
                            constructor(props) {
                                super(props);
                                this.state = {
                                    count: 0,
                                };
                            }
                            incrementCount = () => {
                                this.setState({ count: this.state.count + 1 });
                            }

                            render() {
                                return (
                                    <div>
                                        <p>Count:{this.state.count}</p>
                                        <button onClick={this.incrementCount}>Increment</button>
                                    </div>
                                )
                            }
                        }`}
</pre>
                <p>Count:{this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}

export default CounterClass;