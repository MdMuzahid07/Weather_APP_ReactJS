import React from 'react';
import Header from '../components/Dashboard/Header';
import WeatherLocation from '../components/WeatherView/WeatherLocation';
import WeatherViewHeader from '../components/WeatherView/WeatherViewHeader';
import WeatherSlider from '../components/WeatherView/WeatherSlider';
import TodayWeatherDetails from '../components/Dashboard/WeatherDetails/TodayWeatherDetails';
import Chart from '../components/Dashboard/Chart';

const Home = () => {
    return (
        <div className='md:max-w-4xl bg-img rounded-3xl md:flex justify-between'>
            <div className='md:w-1/4 p-5 text-white'>
                <WeatherViewHeader />
                <WeatherLocation />
                <WeatherSlider />
            </div>
            <div className='dashboard md:w-3/4 p-7 rounded-3xl'>
                <Header />
                <Chart />
                <TodayWeatherDetails />
            </div>
        </div>
    );
};

export default Home;