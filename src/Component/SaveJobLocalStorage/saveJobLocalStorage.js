const getStroedJobApplications =()=>{
    const JobsLocalStroage = localStorage.getItem('jobs-application')
    if(JobsLocalStroage){
        return JSON.parse(JobsLocalStroage)
    }
    return []
};

const saveJobApplication = id =>{
    const StroedJobApplications = getStroedJobApplications();

    const exista = StroedJobApplications.find(jobId => jobId === id);
    if(!exista){
        StroedJobApplications.push(id);
        localStorage.setItem('jobs-application', JSON.stringify(StroedJobApplications))
    }
}

export   {saveJobApplication, getStroedJobApplications} ;
