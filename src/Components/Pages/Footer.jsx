import Nav from '../../assets/nv.png'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200  mt-6 bg-gradient-to-t from-blue-900 text-blue-950 font-extrabold ">
            <aside>
               <img className='w-2/6' src={Nav} alt="" />
                <p>FashionFlare Ltd.<br />Providing reliable service since 2010</p>
                <p> © SHAHRIAR AHMMED - All right reserved by FashionFlare Ltd</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;