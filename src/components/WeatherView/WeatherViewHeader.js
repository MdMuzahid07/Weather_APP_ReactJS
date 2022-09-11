import React from 'react';

const WeatherViewHeader = () => {
    return (
        <div className='flex justify-between items-center mb-5'>
            <div>
                <svg className='bg-white rounded-lg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#009BFF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
            </div>
            <div className='text-xs flex items-center font-bold'>
                <p>C <sup>o</sup></p>
                <input type="checkbox checkbox-accent-100" className="toggle toggle-sm  mx-1" checked />
                <p>F <sup>o</sup></p>
            </div>
        </div>
    );
};

export default WeatherViewHeader;