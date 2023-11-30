import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Applied = ({appliedJob}) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = appliedJob

    return (
        <div className="mb-10">


            <div className='border border-[#E8E8E8] rounded-lg p-10 bg-white'>
            <div>


                <div className=" md:flex justify-between items-center">


                <div className="md:flex  items-center gap-6">

                <div className="bgColor py-20 px-16 rounded-lg w-fit">
                    <img src={logo} alt=""  />
                    </div>

                <div>

                <h1 className='font-extrabold text-[#474747] text-2xl mt-8'>{job_title} </h1>
                <p className='text-[#757575] font-semibold text-xl mt-2'>{company_name} </p>
                <div className='flex gap-2 font-bold active mt-4'>
                    <div className='border border-[#7E90FE] py-2 px-5 rounded-md'>
                        {remote_or_onsite} </div>
                    <div className='border border-[#7E90FE] py-2 px-5 rounded-md'>
                        {job_type} </div>
                    <div></div>
                </div>
                <div className='flex gap-6 mt-4 items-center'>
                    <div className='text-[#757575] flex gap-2 font-semibold text-xl items-center '>  <IoLocationOutline />
                        <h1>{location} </h1>
                    </div>
                    <div className='text-[#757575] flex gap-2 items-center font-semibold text-xl '> <HiOutlineCurrencyDollar/>
                        <h1>Salary: {salary} </h1>
                    </div>
                </div>
                </div>
                </div>
                <Link to={`/JobDetails/${id}`}>
                   <button className='btnColor mt-5   px-3 py-2    md:px-4 md:py-3 btn      rounded-lg '>
              <p className="block  px-2   "  >View Details</p>
              </button>
                   </Link>


                </div>






            </div>

        </div>



        </div>
    );
};

Applied.propTypes = {
appliedJob: PropTypes.object

};

export default Applied;