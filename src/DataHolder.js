import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './DataHolder.css';



const DataHolder = () => {

    const [countryInput, setCountryInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [resName, setResName] = useState();
    const [countryName, setCountryName] = useState();
    const [resHumidity, setResHumidity] = useState();
    const [resTemp, setResTemp] = useState('273.15');
    const [condition, setCondition] = useState('Not yet defined');

    const API = '1a0b6d3c3784f9a8018552c1637ed6d7'


    async function fetcher() {
        try {
            const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${countryInput}&appid=${API}`);
            const weatherData = await weather.json();
            const resName = weatherData.name;
            setResName(resName)
            const countryName = weatherData.sys.country
            setCountryName(countryName)
            const resHumidity = weatherData.main.humidity;
            setResHumidity(resHumidity)
            const resTemp = weatherData.main.temp;
            setResTemp(resTemp)
            const condition = weatherData.weather[0].description;
            setCondition(condition)
        }
        catch (error) {
            alert('Please enter a valid country/city name')
        }
    }


    const onChangeCountry = (event) => {
        setCountryInput(event.target.value.toLowerCase())

    }

    const onChangeCity = (event) => {
        setCityInput(event.target.value)

    }

    return (
        <div className="data__main">
            <div className="data__inputs">
                <input type="text" placeholder="City name" onChange={onChangeCity} />
                <input type="text" placeholder="Country name" onChange={onChangeCountry} />
                <Button className="button" variant="contained" onClick={fetcher} >Retrieve me</Button>
                <ul>
                    <li>Location: {resName} {countryName} </li>
                    <li>Humidity: {resHumidity} %</li>
                    <li>Temperature: {(resTemp - 273.15).toFixed(2)} °C</li>
                    <li>Conditions: {condition}</li>
                </ul>
            </div>

        </div >
    )

}

export default DataHolder;
