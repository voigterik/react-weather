import React, {useState} from "react";
import SearchInput from "./components/SearchInput";
import Location from "./components/Location";

function App(){
  const [location, setLocation] = useState("");

  const getLocation = (string) => {
    setLocation(string);
  };

  return(
    <div>
      <SearchInput onChange={getLocation} /> 
      <Location location={location} />
    </div>
  );
}

export default App;