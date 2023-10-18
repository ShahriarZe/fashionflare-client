import { Link } from "react-router-dom";
import Summer from '../../assets/sale.jpg'
import { useEffect, useState } from "react";

const SummerSale = () => {

    const summerBg = {
        backgroundImage: `url(${Summer})`,
    }

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    useEffect(() => {
        const countdownDate = new Date('October 30, 2023 11:59:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);

        return () => clearInterval(interval.current);
    }, []);


    return (
        <>
            <div className="hero mx-auto mt-12" style={summerBg}>
                <div className="hero-overlay bg-opacity-40 "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex flex-col lg:flex-row items-center justify-center mt-12 ">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold text-center lg:text-left  text-white">Upto 30% SALE</h1>

                            <p className="mb-5 text-white text-center lg:text-left text-xl">Embrace the sunshine and savings with our scorching hot summer sale! Dive into exclusive deals and make your summer unforgettable!</p>
                            <div className="mt-4 flex justify-center lg:justify-start">
                <Link to={'/register'} className="btn btn-outline text-white">SHOP NOW</Link>

                </div>
                        </div>
                        
                        <div className="mt-5">
                        <p className=' text-white text-3xl font-semibold '>Summer Sale Starts In:</p>
                        <div className=" w-auto p-2 m-4 rounded-lg ">
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col items-center justify-center m-2">
                                   
                                   <p className="text-white text-4xl">{days}</p>
                                   
                                    <p className="text-white">Days</p>
                                </div>
                                <p className='text-4xl text-white mt-2'>:</p>
                                <div className="flex flex-col items-center justify-center m-2">
                                    
                                        <p className="text-white text-4xl">{hours}</p>
                                   
                                    <p className="text-white">Hours</p>
                                </div>
                                <p className='text-4xl text-white mt-2'>:</p>
                                <div className="flex flex-col items-center justify-center m-2">
                                   
                                    <p className="text-white text-4xl">{minutes}</p>
                                    
                                    <p className="text-white">Minutes</p>
                                </div>
                                <p className='text-4xl text-white mt-2'>:</p>
                                <div className="flex flex-col items-center justify-center m-2">
                                    
                                    <p className="text-white text-4xl">{seconds}</p>
                                   
                                    <p className="text-white">seconds</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default SummerSale;