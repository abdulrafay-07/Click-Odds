import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';

const Home = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePlayClick = () => {
        dispatch(setUser({ username, highestScore: 0 }));
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen gap-8'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl'>Welcome to Click Odds!</h1>
            <input 
                    type='text'
                    placeholder='Enter username'
                    value={username}
                    onChange={handleInputChange}
                    className='p-3 md:p-4 md:text-xl text-[#121212] bg-white rounded-xl w-36 md:w-44'
            />
            <Link to={`/play/${username}`}>
                <button
                    onClick={handlePlayClick}
                    disabled={!username.trim()}
                    className='button px-4 py-2 md:px-6 md:py-4 bg-blue-500 md:text-xl rounded-lg'
                >
                    Play
                </button>
            </Link>
        </div>
    )
}

export default Home;