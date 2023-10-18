import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import loginBg from '../../assets/login.png'

const testimonials = [
    {
        id: 1,
        name: 'Jhankar Mahboob',
        message: 'I absolutely love the trendy outfits from this fashion website! The quality is amazing.',
        image: 'https://i.ibb.co/b1qfCdC/120894323-197059875119957-6342630029659575816-n.jpg',
      },
      {
        id: 2,
        name: 'Gias Uddin',
        message: 'This is my go-to fashion store. They have a fantastic collection and excellent customer service.',
        image: 'https://i.ibb.co/2c4WdVN/337112404-895503921674982-3631239948056052320-n.jpg',
      },
      {
        id: 3,
        name: 'Rokibul Rokib',
        message: 'Amazing experience shopping here. The styles are unique and the prices are reasonable.',
        image: 'https://i.ibb.co/R270XLJ/320260199-3557753534453160-193624383595704803-n.jpg',
      },
      {
        id: 4,
        name: 'Samiul Alim',
        message: 'Highly recommended! The clothes are stylish, and the delivery is always on time.',
        image: 'https://i.ibb.co/yyZph0h/275833411-4643641589097153-7396072092308172795-n.jpg',
      },
      {
        id: 5,
        name: 'Hasib Imam',
        message: 'I am a regular customer because of their exceptional service and trendy fashion choices.',
        image: 'https://i.ibb.co/yfbY3tq/373836374-799913771924846-7599841366488063960-n.jpg',
      },
    
  ];
const Testimonials = () => {
    const bgStyle = {
        backgroundImage: `url(${loginBg})`,
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <div className="testimonial-slider-container p-8  text-blue-950 mt-10 mb-10 bg-base-200" style={bgStyle}>
          <h2 className='text-center text-blue-950 font-bold text-3xl lg:text-5xl mb-5'>Reviews & Recommendation</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-content text-center">
                <div className="flex flex-col items-center justify-center">
                  <img src={testimonial.image} alt={testimonial.name} className="mb-4 rounded-full w-20 h-20" />
                  <h2 className="text-xl font-bold mb-2">{testimonial.name}</h2>
                  <p className="text-gray-600">{testimonial.message}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      );
    };

export default Testimonials;