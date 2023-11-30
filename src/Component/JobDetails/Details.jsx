import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { PiSubtitles } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";
import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';
import {  saveJobApplication } from "../SaveJobLocalStorage/SaveJobLocalStorage";
import ToastMessage from "./toastMessage";
import { useState } from "react";



const Details = ({jobDetailss}) => {
    const [tostShow, setTostShow] = useState(false)
    const handleLocalStorageJob = (id) =>{
        saveJobApplication(id);
        setTostShow(!tostShow)

        setTimeout(()=>{
            setTostShow(false)
        },3000)

    }
    const { id,salary, job_title,job_description, educational_requirements, job_responsibility, contact_information, experiences} = jobDetailss;

    return (
        <div>


            <div className="grid grid-cols-1 md:grid-cols-3  max-w-5xl mx-auto gap-6 my-32">
                <div className=" md:col-span-2 space-y-6">
                    <h1 className="text-[#1A1919] font-extrabold">Job Description: <span className="textGray font-semibold">{job_description} </span></h1>

                    <h1 className="text-[#1A1919] font-extrabold">Job Responsibility: <span className="textGray font-semibold">{job_responsibility} </span></h1>

                    <h1 className="textBlack font-extrabold">Educational Requirements:</h1>

                    <p className="textGray font-semibold">{educational_requirements} </p>

                    <h1 className="textBlack font-extrabold">Experiences:</h1>
                    <p className="textGray font-semibold"> {experiences} </p>
                </div>


                <div className="-order-1 md:order-1">
                <div className="bgColor  p-7 rounded-lg ">
                    <h1 className="textBlack font-extrabold pb-6 text-xl ">Job Details</h1>
                    <hr className="bg-[#7E90FE] " />

                    <div className=' flex pt-6 mb-3 gap-2 textGray items-center font-semibold text-lg '> <div className="text-[#7E90FE]"><HiOutlineCurrencyDollar/></div>
                        <h1 className="font-extrabold ">Salary : <span className=" font-bold"> {salary} </span></h1>
                    </div>
                    <div className=' flex  mb-8 gap-2 textGray items-center font-semibold text-lg '> <div className="text-[#7E90FE]"><PiSubtitles/></div>
                        <h1 className="font-extrabold ">Job Title : <span className=" font-bold">{job_title} </span></h1>
                    </div>

                    <h1 className="textBlack font-extrabold pb-6 text-xl ">Contact Information</h1>
                    <hr className="bg-[#7E90FE] " />

                    <div className=' flex pt-6 mb-3 gap-2 textGray items-center font-semibold text-lg '> <div className="text-[#7E90FE]"><MdOutlinePhone/></div>
                        <h1 className="font-extrabold ">Phone : <span className=" font-bold">{contact_information?.phone} </span></h1>
                    </div>

                    <div className=' flex  mb-3 gap-2 textGray items-center font-semibold text-lg '> <div className="text-[#7E90FE]"><CgMail/></div>
                        <h1 className="font-extrabold ">Email : <span className=" font-bold">{contact_information?.email} </span></h1>
                    </div>

                    <div className=' flex  gap-2 textGray items-start font-semibold text-lg'> <div className="text-[#7E90FE]">{<IoLocationOutline/>}</div>
                        <h1 className="font-extrabold ">Address : <span className=" font-bold">{contact_information?.address} </span></h1>
                    </div>



                </div>
                <button
                onClick={()=> handleLocalStorageJob(id)}
                className="btn btnColor w-full text-xl mt-6 font-extrabold">Apply Now</button>




                </div>
            </div>

            {
                tostShow && <ToastMessage/>
            }
        </div>
    );
};

Details.propTypes = {
    jobDetailss: PropTypes.object
};

export default Details;