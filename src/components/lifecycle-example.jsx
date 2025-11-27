import React from "react";

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('constructor');
  }

  incrementCount = () => {
        this.setState({ count: this.state.count + 2 });
    }

  componentDidMount() {
    console.log('componentDidMount');
    // You can fetch data here
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    // Respond to state or prop changes here
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // Cleanup (timers, listeners, etc.) here
  }

  render() {
    return (
      <div className='container'>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>
            Increment
        </button>
      </div>
    );
  }
}

export default ExampleComponent;