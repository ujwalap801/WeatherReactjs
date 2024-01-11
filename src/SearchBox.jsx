import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';
import "./SearchBox.css"
export default function SearchBox({updateInfo})
{
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";

    const API_KEY="c223b0463eef5df08679ab3d57c1bb9b";
    
    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };

            return result;
        } catch (error) {
           throw error;
            // Display an error message to the user
        }
    };


    let handleChange= (evt)=>
    {
          setCity(evt.target.value);
    }

    let handleSubmit= async (evt)=>
    {try{
           evt.preventDefault();
           console.log(city);
           setCity("");
       let newinfo =await getWeatherInfo();
       updateInfo(newinfo);
    } catch(error)
    {
        setError(true);
    }
}
    return(
        <div className='SearchBox'>
          
            <form onSubmit={handleSubmit}>
            <TextField id="city"
             label="City Name" 
             variant="outlined" 
             value={city}
             required
             onChange={handleChange}/>

                   
                   <br></br>
                   <br></br>
             <Button variant="contained" type='submit' >
                Search
                </Button>

                {error && <p style={{color:"red"}}>No such place exist</p>}
                </form>
        </div>
    )
}