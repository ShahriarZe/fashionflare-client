import { Link } from "react-router-dom";
import Baby from '../../assets/baby.jpg'
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const SummerSale = () => {

    const summerBg = {
        backgroundImage: `url(${Baby})`,
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
            <div className="hero min-h-screen mt-12" style={summerBg}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Save 30% Off  <span className="text-blue-950 font-extrabold">Kids Fashion</span>!!</h1>
                        <Marquee speed={100}>
                        Dive into the world of enchanting fashion for little ones! Our ongoing kids sale brings you an exclusive collection of trendy outfits, playful accessories, and adorable footwear, all designed to make your child shine bright
                        </Marquee>
                    </div>
                    <div>
                        <div className="mt-10">
                            <p className=' text-white text-3xl font-semibold'>Times Remaining for Kids Sale !</p>
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
                                <Link to={'/register'} className="btn btn-outline text-white mt-5">Shop NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SummerSale;