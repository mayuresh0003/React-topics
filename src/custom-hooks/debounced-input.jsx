import { useState } from "react";
import useDebounced from "./use-debounced";

const DebouncedInput = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    const debouncedValue = useDebounced(inputText, 1000, ()=> {
        console.log('Function called after 1 second delay:');
        
    });

    return (
        <div>
            <p>Debounced Input: {debouncedValue}</p>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type something..."
            />
        </div>
    );
}

export default DebouncedInput;