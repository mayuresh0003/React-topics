
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');
const UserContext = createContext(null);
const DataContext = createContext();
const UseContextHook = () => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <UserContext.Provider value={{ isLoggedin: true }}>
                <DataContext.Provider value="Hello from Context">
                    <div className='container'>
                        <h1>
                            <u>useContext Hook</u>
                        </h1>
                        <h5>Question: What is useContext in react?</h5>
                        
                            <li>The useContext hook is a built-in React hook that allows you to access the value of a context directly in a functional component.</li>
                            <li>Used consume values ( like data or functions) from a context a contect created by createContext().</li>
                            <li>It allows functional components to access contect values without prop drilling.</li>
                            <li>In scenerios where passing props through multiple levels of components is impractical.</li>
                        

                        <GrandparentComponent/>
                    </div>
                </DataContext.Provider>
            </UserContext.Provider>
        </ThemeContext.Provider>

    );
};

// Prop Drilling
// GrandparentComponent
const GrandparentComponent = () => {

    return <ParentComponent />;
};

// ParentComponent
const ParentComponent = () => {
    return <ChildComponent />;
};

// ChildComponent
const ChildComponent = () => {
    return <GrandchildComponent />;
};

// GrandchildComponent
const GrandchildComponent = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    const { isLoggedin } = useContext(UserContext);
    const data = useContext(DataContext);
    return (
        <div className='container'>
            <p>useContext: {data}</p>
            <p>value from context : {theme}</p>
            <button onClick={changeTheme}>Change Theme</button>
            <p>{isLoggedin ? "User is Loggen in" : "User is not logged in"}</p>

            <h4>Ref below code:</h4>
            <pre>
                {`
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');
const UserContext = createContext(null);
const DataContext = createContext();
const UseContextHook = () => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <UserContext.Provider value={{ isLoggedin: true }}>
                <DataContext.Provider value="Hello from Context">
                    <div>
                        <GrandparentComponent />
                    </div>
                </DataContext.Provider>
            </UserContext.Provider>
        </ThemeContext.Provider>

    );
};

// Prop Drilling
// GrandparentComponent
const GrandparentComponent = () => {

    return <ParentComponent />;
};

// ParentComponent
const ParentComponent = () => {
    return <ChildComponent />;
};

// ChildComponent
const ChildComponent = () => {
    return <GrandchildComponent />;
};

// GrandchildComponent
const GrandchildComponent = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    const { isLoggedin } = useContext(UserContext);
    const data = useContext(DataContext);
    return (
        <div>
            <p>useContext: {data}</p>
            <p>value from context : {theme}</p>
            <button onClick={changeTheme}>Change Theme</button>
            <p>{isLoggedin ? "User is Loggen in" : "User is not logged in"}</p>
        </div>
    );
};

export default UseContextHook;`}
            </pre>
        </div>
    );
};

export default UseContextHook;