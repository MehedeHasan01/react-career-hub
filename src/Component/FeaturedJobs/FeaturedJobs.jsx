import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } ,[]);
    const jobsLength =jobs.length
    return (
        <div className="my-32 max-w-5xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-[#1A1919] text-5xl font-extrabold">Featured Jobs</h1>
                <p className="textGray mt-4 font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, showAll).map(Job => <FeaturedJob key={Job.id} job={Job} ></FeaturedJob>)
                }
            </div>

           <div className={`text-center mt-10 ${showAll === jobsLength && 'hidden'}`}>
           <button className='btnColor mt-5   px-3 py-2  shadow-lg  md:px-4 md:py-3 btn      rounded-lg  '
           onClick={()=> setShowAll(jobs.length)}
           >
              <Link className="  px-2 " aria-current="page">See All Jobs</Link>
              </button>
           </div>
        </div>
    );
};

export default FeaturedJobs;