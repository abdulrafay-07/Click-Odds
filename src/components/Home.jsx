import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-8'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl'>Welcome to Click Odds!</h1>
            <Link to='/play'>
                <button className="button px-4 py-2 md:px-6 md:py-4 bg-blue-500 md:text-xl rounded-lg">
                    Play
                </button>
            </Link>
        </div>
    )
}

export default Home;