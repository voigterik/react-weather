import React, {useState} from "react";

const api = {
  key: "5cfd510a1b61652d26a121832f48d41d",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather?q="
};

function App() {

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState({});

  const getData = (event) => {
    if(event.key === "Enter"){
      const response = fetch(`${api.baseUrl}${query}&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          setLocation(response);
          setQuery("");
        });            
    }
    
  };

  return(
    <div className="b-weather-app">
      <input 
            type="text"
            placeholder="Search..."
            value={query}
            onChange={event => setQuery(event.target.value)}
            onKeyPress={getData}
        />
        <h1>{location.name}</h1>
      
    </div>
  );
};

export default App;