import { Link } from "react-router-dom";
import BannerImg from '../../assets/images/user.png'

const Banner = () => {

return (
    <>

<div className="bgColor" >

        <div className="flex flex-col-reverse lg:flex-row justify-center items-center text-center lg:text-start max-w-5xl mx-auto h-[87vh] ">
        <div className="space-y-6 mt-9  flex-1   md:px-0 px-10 md:mt-0 ">

        <div className=' text-5xl md:text-7xl font-bold text-[#1A1919] '>
        <h1>
        One Step <br /> Closer To Your <br /><span className="active">Dream Job</span>
        </h1>
        </div>
            <p className=' textGray font-medium text-lg ' >Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='btnColor   hover:-translate-y-1 px-3 py-2   md:px-4 md:py-3   transition duration-10 delay-100 rounded-lg text-white'>
              <Link className="block  px-2 " aria-current="page">Get Started</Link>
              </button>
            </div>
            <div className=" flex-1 ">

                <img src={BannerImg} alt="" className='h-[87vh] w-[100%]'  />
            </div>
        </div>
</div>



    </>
)

};

export default Banner;