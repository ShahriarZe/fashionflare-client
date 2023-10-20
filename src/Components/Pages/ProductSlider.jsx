import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
    'https://i.ibb.co/8BKnsh6/banner-nike.jpg',
    'https://i.ibb.co/M2kn6Pb/artboard-1-4x.jpg',
    'https://i.ibb.co/t2cwCRk/artboard-1-copy-7-4x.jpg'
];
const ProductSlider = () => {
    
    return (
     <div>
        <div>
            <h1 className='text-center text-5xl font-extrabold mt-16 '>Advertisement</h1>
        </div>
         <div className='container mx-auto mt-2'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="w-full h-80 md:h-96 lg:h-[700px]">
                        <img
                            src={image}
                            alt={`Panoramic Slide ${index + 1}`}
                            className="w-full h-full object-cover"
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

export default ProductSlider;