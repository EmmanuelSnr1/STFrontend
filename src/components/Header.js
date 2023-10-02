import {FaBars, FaUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import {SiteLink} from "./SiteLink";


export function Header() {
    return (
        <header className="fixed w-full z-50 h-24 text-gray-600 body-font bg-black/80 drop-shadow-lg">
            <div className="container flex justify-between flex-row flex-wrap items-center p-5 mx-auto">
                <Link to="/" className='flex items-center'>
                    <div className='w-[64px] lg:w-22.5 mr-2'>
                        <img src="assets/logo.png" alt=""/>
                    </div>
                    <div className='text-2xl lg:text-[32px] text-accent font-bold'>StocXTune</div>
                </Link>

                <nav
                    className="hidden lg:block flex space-x-6 flex-wrap  items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4">
                    <SiteLink display="Home" path="/"/>
                    <SiteLink display="My Portfolio" path="/my-portfolio"/>
                    <SiteLink path='/analytics' display="Analytics"/>
                    <SiteLink path='/insights' display="Insights"/>
                    <SiteLink path='/news' display="News on Investing"/>
                </nav>


                <div className="flex">
                    <Link to="/register">
                        <button className='mr-2 text-white btn bg-primary border-primary hidden lg:block'>Register
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className='btn btn-primary  btn-outline hidden lg:block'>Sign In</button>
                    </Link>

                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabIndex="0"
                               className="btn btn-circle btn-ghost btn-secondary ml-6"><FaUserCircle size={36}/></label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52">
                            <li><Link to='/register' className="">Register</Link></li>
                            <li><Link to='/login' className="">Sign In</Link></li>
                        </ul>
                    </div>

                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabIndex="0"
                               className="btn btn-circle btn-secondary btn-secondary ml-6"><FaBars/></label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52">
                            <li><Link to='/' className="">Home</Link></li>
                            <li><Link to='/my-portfolio' className="">My Portfolio</Link></li>
                            <li><Link to='/analytics' className="">Analytics</Link></li>
                            <li><Link to='/insights' className="">Insights</Link></li>
                            <li><Link to='/news' className="">News on Investing</Link></li>
                        </ul>
                    </div>
                </div>


            </div>
        </header>
    );
}
