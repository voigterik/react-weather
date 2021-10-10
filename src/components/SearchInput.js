const SearchInput = (props) => {
 
    const handleChange = event =>{
        props.onChange(event.target.value);        
    }

    // if <enter> clear input value
    const clearInput = event =>{
        if(event.key === "Enter"){
            event.target.value = "";
        }
    }

    return(
        <input 
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            onKeyPress={clearInput}
            value={props.value}
        />
    );
};

export default SearchInput;