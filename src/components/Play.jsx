import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addScore } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Play = () => {
    const [count, setCount] = useState(0);
    const [highestScore, setHighestScore] = useState(0);
    const [gameEnd, setGameEnd] = useState(false);

    const { slug } = useParams();

    const user = 
        useSelector(state => state.user.users)
        .find(user => user.username == slug);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const quotes = ['You can do better!', 'Keep going!', 'Keep pushing!', 'Way to go!', 'Insane!']

    const handleClick = () => {
        const number = count + 1;

        if (number === 99) {
            alert(`You won, Congrats!`);
            setCount(0);
            return;
        }

        const randomNumbersArr = getRandomNumbersArr(count);
        
        const randomNumber = getRandomNumber(randomNumbersArr);

        if (randomNumber === count) {
            setGameEnd(true);
            if (highestScore < count) {
                setHighestScore(count);
            }
            return;
        }

        setCount(number);
    }

    const getRandomNumber = (arr) => {
        const randomIndex = Math.floor(Math.random() * 100);

        const randomNumber = arr[randomIndex];

        return randomNumber;
    }

    const getRandomNumbersArr = (count) => {
        let arr = Array.from({ length: 100 });

        const threshold = count;

        arr.forEach((element, index, array) => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            if (randomNumber <= threshold) {
                array[index] = threshold;
            } else {
                array[index] = randomNumber;
            }
        })
        
        return arr;
    }

    const handleReset = () => {
        setGameEnd(false);
        setCount(0);
    }

    const handleSubmit = () => {
        dispatch(addScore({ username: user.username, highestScore }));
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center gap-12 px-4 font-primary'>
            <h2 className='text-2xl'>Highest Score: {highestScore}</h2>
            <h1 className={`${gameEnd ? 'text-2xl text-center' : 'hidden'}`}>
                You lost at {count + 1}, Your score is {count}, {count < 10 ? quotes[0] : count < 20 ? quotes[1] : count < 25 ? quotes[2] : count < 50 ? quotes[3] : quotes[4] }
            </h1>
            <div className='flex items-center'>
                <button 
                    className='w-32 h-32 flex items-center justify-center rounded-full bg-red-500 text-white text-3xl transition-transform transform-gpu focus:outline-none focus:ring-4 focus:ring-red-800 active:scale-95'
                    disabled={gameEnd}
                    onClick={handleClick}
                >
                    {count}
                </button>
            </div>
            {gameEnd && (
                <div className='mt-4 flex gap-4'>
                    <button onClick={handleSubmit} className='button px-4 py-2 bg-blue-500 text-white rounded'>
                        Submit High Score
                    </button>
                    <button onClick={handleReset} className='button px-4 py-2 bg-green-500 text-white rounded'>Reset Game</button>
                </div>
            )}
        </div>
    )
}

export default Play;