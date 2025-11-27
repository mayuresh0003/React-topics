import UseCounter from "./use-counter";
import useWindowSize from "./use-window-size";

function Counter() {

  const { increment, decrement, reset, count } = UseCounter(0, 2);
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Custom Counter Hook Example</h2>
      <h5>
       Question: Build a custome hook to manage and update a conunter with appropriate functionalities.
      </h5>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <br />

      <br />

      ref code:
      <pre>
        {`import UseCounter from "./use-counter";

function Counter() {

  const { increment, decrement, reset, count } = UseCounter(0, 2);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
    
}

export default Counter;
`}
      </pre>
<br />
      <h5>
        Question: build a custome hook to efficiently track and update window dimensions dynamically.
      </h5>
      <p>Width:{width}</p>
      <p>Height: {height} </p>

      ref code:
      <pre>
        {`import { useEffect, useState } from "react";
        
        const useWindowSize = () => {
            const [windowSize, setWindowSize] = useState({
                width: window.innerWidth,
                height: window.innerHeight
            });
        
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            };
        
            useEffect(() => {
                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
            }, []);
        
            return windowSize;
        }
        
        export default useWindowSize;`}
      </pre>
    </div>
  );

}

export default Counter;
