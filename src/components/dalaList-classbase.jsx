import React from "react";

class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({data, isLoading: false});
      })
      .catch((error) => {
        this.setState({error: "Error fetching data", isLoading: false});
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const {data, isLoading, error} = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className='container'>
        <h3>Data List</h3>
        <ul>
          {data.splice(0, 6).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <h4>Ref code</h4>
        <pre>
            {`import React from "react";

class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({data, isLoading: false});
      })
      .catch((error) => {
        this.setState({error: "Error fetching data", isLoading: false});
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const {data, isLoading, error} = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <h3>Data List</h3>
        <ul>
          {data.splice(0, 6).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataList;`}
        </pre>
      </div>
    );
  }
}

export default DataList;