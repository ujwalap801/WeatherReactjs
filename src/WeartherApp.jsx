import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import { useState } from "react"
export default function WeartherApp()
{


     const [weatherInfo,setweatherInfo]=useState({
    
            city:"Delhi",
        feelslike :24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });


    let updateInfo=(newinfo)=>
    {
        setweatherInfo(newinfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}