import { Link } from 'react-router-dom';
import Err from '../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center mt-10'>
                <img className='rounded-2xl' src={Err} alt="" />
            </div>
            <div className='flex justify-center mt-8'>
                <div>
                <Link to='/'><button className='text-xl btn btn-outline'>Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;