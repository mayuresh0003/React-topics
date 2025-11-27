import React from 'react'
import ExampleComponent from './lifecycle-example';

function Lifecyclemethod() {
    return (
        <div className='container'>
            <h2>What is React Lifecycle Method?</h2>
            <p>
                React lifecycle methods are special methods that are called at different stages of a component's life cycle, such as when it is created, updated, or destroyed. These methods allow developers to perform actions at specific points in a component's life cycle, such as fetching data, updating the DOM, or cleaning up resources.
            </p>
            <h2>What are the different types of React Lifecycle Methods?</h2>
            <p>
                There are three main types of React lifecycle methods: mounting, updating, and unmounting. Mounting methods are called when a component is created, updating methods are called when a component's state or props change, and unmounting methods are called when a component is removed from the DOM.
            </p>
            <h2>Mounting Phase:</h2>
            <p>
                The mounting phase is the initial phase of a component's life cycle, where it is created and inserted into the DOM.
            </p>
            <h3>Mounting Methods:</h3>
            <ul>
                <li>constructor(): This method is called when a component is created and is used to initialize state and bind methods.</li>
                <li>render(): This method is required in all class component and responssible for rendering the jsx(UI) to the DOM</li>
                <li>componentDidMount(): This method is called after the component has been rendered and is often used for data fetching or DOM manipulation.</li>
            </ul>
            <h2>Updating Phase:</h2>
            <p>
                The updating phase occurs when a component's state or props change, causing it to re-render.
            </p>
            <h3>Updating Methods:</h3>
            <ul>
                <li>shouldComponentUpdate(): This method is called before a component re-renders and can be used to optimize performance by preventing unnecessary updates.</li>
                <li>render(): This method is called again to re-render the component with the updated state or props.</li>
                <li>componentDidUpdate(): This method is called after the component has been updated and can be used for side effects, such as data fetching or DOM manipulation.</li>
            </ul>
            <h2>Unmounting Phase:</h2>
            <p>
                The unmounting phase occurs when a component is removed from the DOM.
            </p>
            <h3>Unmounting Method:</h3>
            <ul>
                <li>componentWillUnmount(): This method is called before a component is removed from the DOM and can be used for cleanup, such as cancelling network requests or removing event listeners.</li>
            </ul>
            <h2>Example of React Lifecycle Methods:</h2>
            <p>
                Here's an example of a class component that uses React lifecycle methods:
            </p>
            <pre>
                {`
class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    // You can fetch data here
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    // Respond to state or prop changes here
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // Cleanup (timers, listeners, etc.) here
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
`}
            </pre>
< ExampleComponent />
        </div>
    )
}

export default Lifecyclemethod;
