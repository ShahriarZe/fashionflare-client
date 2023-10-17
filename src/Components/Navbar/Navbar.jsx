import Nav from '../../assets/nv.png'
import userImg from '../../assets/user.png'
const Navbar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>Login</a></li>
    </>
    return (
        <div className="navbar bg-opacity-20 bg-white absolute top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown -mr-2">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <img className='w-6/12 md:w-4/12 lg:w-2/12 md:ml-6 lg:ml-12' src={Nav} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
            <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userImg} alt="" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <div className="text-xl text-center">
                            <h1>Shahriar</h1>
                        </div>
                        <div className="text-xl text-center">
                           <button>Shahriar</button>
                        </div>
                       
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;