"use client";

import { Card, DropDownMenu, Ellipse, SearchField } from "./components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const ellipseData = ["340px", "540px", "940px", "1340px"];
  const defaultCity = "New York";

  const [weatherData, setWeatherData] = useState(null);
  const [inputData, setInputData] = useState(defaultCity);

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=c54db69bc7dc4466bf415506241712&q=${inputData}`
      )
      .then((res) => setWeatherData(res.data));
  }, [inputData]);

  const handleOnChange = (event) => {
    setInputData(event.target.value);
  };

  const handleDropDownClick = (cityName) => {
    setInputData(cityName);
  };

  return (
    <div className="w-screen h-screen flex relative ">
      <div className="w-1/2 h-full bg-[#F3F4F6] flex justify-center items-center overflow-hidden">
        <SearchField
          handleOnChange={handleOnChange}
          className="absolute z-50 top-10 left-10 shadow-lg max-w-full"
          placeholder="Enter city name"
        ></SearchField>

        {inputData && inputData !== defaultCity && (
          <div className="flex flex-col items-start absolute top-[150px] left-10 z-50 bg-white px-6 py-4 rounded-3xl shadow-lg">
            {weatherData && (
              <div className="w-fit h-fit">
                <DropDownMenu
                  cityName={weatherData.location.name}
                  onClick={() => handleDropDownClick(weatherData.location.name)} //Changes input value once clicked
                />
              </div>
            )}
          </div>
        )}

        <Card
          city={weatherData?.location?.name}
          dayTemp={weatherData?.forecast?.forecastday[0].day?.maxtemp_c}
          dayStatus={weatherData?.forecast?.forecastday[0].day?.condition?.text}
          dayTime={true}
          inputData={inputData}
        />
      </div>
      <div className="w-1/2 h-full bg-[#0F141E] flex justify-center items-center overflow-hidden">
        <Card
          city={weatherData?.location?.name}
          dayTemp={weatherData?.forecast?.forecastday[0].day?.mintemp_c}
          dayStatus={weatherData?.forecast?.forecastday[0].day?.condition?.text}
          dayTime={false}
          inputData={inputData}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[140px] h-[140px] bg-white rounded-full flex items-center justify-center gap-4 absolute top-1/2 left-[45%] transform -translate-x-[45%] -translate-y-1/2">
          <img src="logo1.png" className="w-[43px] h-[86px]"></img>
          <img src="logo2.png" className="w-[43px] h-[86px]"></img>
        </div>

        {ellipseData.map((value, index) => (
          <Ellipse key={index} size={value} />
        ))}
      </div>
    </div>
  );
}
