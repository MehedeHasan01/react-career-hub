import { Link, NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
const Header = () => {

    const [one, setOne] = useState(false)


    return (
        <div className="bgColor ">
            <nav className="  mx-auto max-w-5xl  ">
        <div className="  flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={'/'}  className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="text-3xl font-bold text-black">CareerHub</h1>
          </Link>
          <div onClick={()=> setOne(!one)} data-collapse-toggle="navbar-default" type="button" className="inline-flex  items-center p-1  justify-center  btnColor rounded-full shadow-md md:hidden  focus:outline-none focus:ring-2 cursor-pointer" aria-controls="navbar-default" aria-expanded="false">
              <div className="text-4xl">
                {
                    one ? <IoMdClose/> :  <IoMdMenu/>
                }
              </div>

          </div>
          <div className={`  ${ !one && 'hidden' } delay-1000  w-full md:block md:w-auto`} id="navbar-default">

            <div className="font-bold  flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-10 rtl:space-x-reverse  md:mt-0    text-black items-center ">
              <button className='bg-transparent hover:-translate-y-1 px-2 py-3 transition duration-10 delay-100'>
              <NavLink className="block py-2 px-3   md:bg-transparent  md:p-0  " to={'/'}>Statistics</NavLink>

              </button>

              <NavLink to={'/AppliedJobs'}>

              <button className='bg-transparent hover:-translate-y-1 px-2 py-3 transition duration-10 delay-100'>
              <p   className="block py-2 px-3   md:bg-transparent  md:p-0  ">Applied Jobs</p>
              </button>
              </NavLink>
              <button className='bg-transparent hover:-translate-y-1 px-2 py-3 transition duration-10 delay-100'>
              <NavLink to={'//Blog'}  className="block py-2 px-3   md:bg-transparent  md:p-0  ">Blog</NavLink>
              </button>


              <button className='btnColor   hover:-translate-y-1 px-3 py-2  shadow-lg  md:px-4 md:py-3 hover:shadow-md  transition duration-10 delay-100 rounded-lg text-white'>
              <a href="#" className="block  px-2   " aria-current="page">Start Hiring</a>
              </button>
            </div>
          </div>
        </div>
      </nav>
        </div>

    );
};

export default Header;