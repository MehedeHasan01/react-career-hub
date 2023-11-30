// import PropTypes from 'prop-types';



import { useLoaderData, useParams } from "react-router-dom";
import JobBanner from "../JobBanner/JobBanner";
import Details from "./details";



const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    return (
        <div>
            <JobBanner title={'Job Details'} />
           <Details jobDetailss={job}> </Details>
        </div>
    );
};

export default JobDetails;