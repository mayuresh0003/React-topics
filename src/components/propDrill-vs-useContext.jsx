import React, { createContext, useContext } from "react";
const DataContext = createContext();

 function PropDrill() {
  return (
    <div className='container'>
      < GrandparentComponent />
      < GrandparentWithContext />
      <pre>
        {`import React, { createContext, useContext } from "react";
const DataContext = createContext();

 function PropDrill() {
  return (
    <div>
      < GrandparentComponent />
      < GrandparentWithContext />
    </div>
  )
}
 // Prop Drilling
const GrandparentComponent = () => {
  const data = "Hello from Grandparent";
  return <ParentComponent data={data} />;
};

const ParentComponent = ({ data }) => {
  return <ChildComponent data={data} />;
};

const ChildComponent = ({ data }) => {
  return <GrandchildComponent data={data} />;
};

const GrandchildComponent = ({ data }) => {
  return <p>Prop Drilling: {data}</p>;
};

const GrandparentWithContext = () => {
  return (
    <DataContext.Provider value="Hello from Context">
      <ParentWithContext />
    </DataContext.Provider>
  );
};

const ParentWithContext = () => <ChildWithContext />;
const ChildWithContext = () => <GrandchildWithContext />;
const GrandchildWithContext = () => {
  const data = useContext(DataContext);
  return <p>useContext: {data}</p>;
};

export default PropDrill;`}
      </pre>
    </div>
  )
}
 // Prop Drilling
const GrandparentComponent = () => {
  const data = "Hello from Grandparent";
  return <ParentComponent data={data} />;
};

const ParentComponent = ({ data }) => {
  return <ChildComponent data={data} />;
};

const ChildComponent = ({ data }) => {
  return <GrandchildComponent data={data} />;
};

const GrandchildComponent = ({ data }) => {
  return <p>Prop Drilling: {data}</p>;
};

const GrandparentWithContext = () => {
  return (
    <DataContext.Provider value="Hello from Context">
      <ParentWithContext />
    </DataContext.Provider>
  );
};
const ParentWithContext = () => {
    return <ChildWithContext />;
};
const ChildWithContext = () => {
    return <GrandchildWithContext />;
};

const GrandchildWithContext = () => {
  const data = useContext(DataContext);
  return <p>useContext: {data}</p>;
};

export default PropDrill;