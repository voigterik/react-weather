const SearchInput = (props) => {
 
    function handleChange(event){
        props.onChange(event.target.value);
    }

    return(
        <input 
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            value={props.value}
        />
    );
};

export default SearchInput;