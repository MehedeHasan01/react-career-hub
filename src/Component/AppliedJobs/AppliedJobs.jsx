import JobBanner from "../JobBanner/JobBanner";
import {  useLoaderData } from "react-router-dom";
import Applied from "./Applied";
import { getStroedJobApplications } from "../SaveJobLocalStorage/SaveJobLocalStorage";
import { useEffect, useState } from "react";



const AppliedJobs = () => {
    const [appliedJobDisplay, setAppliedJobDisplay] = useState([])
    const [FilterJobs, setFilterJobs] = useState([])

    const handleFilterJobsApplay = filter =>{
        if(filter === 'all'){
            setFilterJobs(appliedJobDisplay)
        }
        else if(filter === 'remote'){
            const remotJob = appliedJobDisplay.filter(job => job.remote_or_onsite === 'Remote' );
            setFilterJobs(remotJob)
        }
        else if(filter === 'onsite'){
            const onsiteJob = appliedJobDisplay.filter(job => job.remote_or_onsite === 'Onsite')
            setFilterJobs(onsiteJob)
        }
    }

    const jobs = useLoaderData()
    useEffect(()=>{
    const StroredJobId = getStroedJobApplications()
    const jobsApplied = jobs.filter(job => StroredJobId.includes(job.id));
    setAppliedJobDisplay(jobsApplied)
    setFilterJobs(jobs)
    },[jobs])
    return (
        <div>
            <JobBanner title={'Applied Jobs'}></JobBanner>

           <div className="max-w-5xl mx-auto my-28 ">
            <div className="text-end flex justify-end">

            <details className="dropdown mb-8">
            <summary className="btn btnColor font-bold text-lg">Filter By</summary>
            <ul className="py-2 px-7 font-semibold shadow menu dropdown-content z-[1] btnColor rounded-box w-fit">
                <li onClick={()=> handleFilterJobsApplay('all')}><a>All</a></li>
                <li onClick={()=> handleFilterJobsApplay('remote')}><a>Remote</a></li>
                <li onClick={()=> handleFilterJobsApplay('onsite')}><a>Onsite</a></li>
            </ul>
            </details>



            </div>
           {
                FilterJobs.map(job => <Applied key={job.id} appliedJob={job}> </Applied>)
            }
           </div>

        </div>
    );
};

export default AppliedJobs;