import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const [highestScore, setHighestScore] = useState(0);
    const [gameEnd, setGameEnd] = useState(false);

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
        // Handle submitting the game
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center gap-12 bg-[rgb(18,18,18)] text-white px-4 font-primary'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl'>Welcome to Click Odds!</h1>
            <h2 className='text-2xl'>Highest Score: {highestScore}</h2>
            <h1 className={`${gameEnd ? 'text-2xl text-center' : 'hidden'}`}>Both guessed {count + 1}, Your score was {count}.</h1>
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
                <div className="mt-4 flex gap-4">
                    <button onClick={handleSubmit} className="button px-4 py-2 bg-blue-500 text-white rounded">Submit Score</button>
                    <button onClick={handleReset} className="button px-4 py-2 bg-green-500 text-white rounded">Reset Game</button>
                </div>
            )}
        </div>
    )
}

export default App;