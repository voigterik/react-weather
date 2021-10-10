import {useState} from "react"
const SearchInput = ({onChange}) => {
    const [text, setText] = useState("");

    const search = (event) => {
        setText(event.target.value);
        onChange(event.target.value);          
    }
    
    return (
        <input 
            type="text" 
            value={text}
            placeholder="Search..."
            onChange={search} 
        />    
    );
};

export default SearchInput;