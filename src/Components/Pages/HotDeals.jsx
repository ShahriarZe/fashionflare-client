import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
    'https://i.ibb.co/7z71fx6/6-hover.jpg',
    'https://i.ibb.co/Y2zF9qY/4.jpg',
    'https://i.ibb.co/Jc81f89/5.jpg',
    'https://i.ibb.co/yRj5JPc/8-hover.jpg',
    'https://i.ibb.co/VWn5H05/10.jpg',
];

const HotDeals = () => {
    return (
       <div>
        <div>
            <h1 className='text-center text-5xl font-extrabold mt-10 text-blue-950'>Trending Sales</h1>
        </div>
         <div className='max-w-md mx-auto mt-2'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="">
                            <img
                                src={image}
                                alt={`Panoramic Slide ${index + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <h2 className='text-center'>Swipe</h2>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
       </div>
    );
};

export default HotDeals;
