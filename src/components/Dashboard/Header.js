import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between mb-5'>
            <div>
                <h2 className='font-bold'>Welcome back Isabella!</h2>
                <p className='text-xs md:text-md font-bold'>Check out today's weather information</p>
            </div>
            <div className='flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                <img className='w-10 h-10 rounded-xl ml-3 object-cover' src="https://a-z-animals.com/media/2021/11/sunny-cat-picture-id508030340-1024x535.jpg" alt="" />
            </div>
        </div>
    );
};

export default Header;