import React, {useState} from "react";

const api = {
  key: "7b68fac815bda2f5ae5e4aff1088f832",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather?q="
};

function App() {

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState({});

  const getData = (event) => {
    if(event.key === "Enter"){
      try {
        fetch(`${api.baseUrl}${query}&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(response => {          
          setLocation(response);
          setQuery("");
        });    
      } catch(error) {}        
    }    
  };

  return(
    <div className={Math.round(location.main.temp) > 18 ? "b-weather-app m-warm" : "b-weather-app m-cold"}>
      <div className="e-app-container">
        <input 
              type="text"
              placeholder="Search..."
              value={query}
              onChange={event => setQuery(event.target.value)}
              onKeyPress={getData}
              className="e-input" 
          />
          <h1 className="e-location">{location.name}, {location.sys.country}</h1>
           <h3 className="e-temperature">{Math.round(location.main.temp)}</h3>
          <h5 className="e-sky">{location.weather[0].description}</h5>
      </div>
      
    </div>
  );
};

export default App;