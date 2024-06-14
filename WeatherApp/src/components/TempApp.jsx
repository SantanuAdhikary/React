/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './css/style.css';

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('bangalore');

    const fetchWeather = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=dd04268601c8ca0f81a6b21277402d5e`;
            const response = await fetch(url);
            const jsonRes = await response.json();
            if (response.ok) {
                setCity(jsonRes.main);
            } else {
                setCity(null);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setCity(null);
        }
    };

    const handleSearch = () => {
        setQuery(search);
    };

    useEffect(() => {
        if (query) {
            fetchWeather();
        }
    }, [query]);

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button className="searchButton" onClick={handleSearch}>Search</button>
                </div>

                {!city ? (
                    <p>NO DATA FOUND</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                 {query}
                            </h2>
                            <h1 className="temp">
                                {city.temp}&deg; C
                            </h1>
                            <h3 className="tempmin_max">
                                Min : {city.temp_min}&deg; C | Max: {city.temp_max}&deg; C
                            </h3>
                        </div>

                      
                    </div>
                )}
            </div>
        </>
    );
};

export default TempApp;




