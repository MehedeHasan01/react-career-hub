import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

import HomePage from "../Component/HomePage/HomePage";
import JobDetails from "../Component/JobDetails/JobDetails";
import AppliedJobs from "../Component/AppliedJobs/AppliedJobs";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children:[
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/JobDetails/:id',
                element: <JobDetails/>,
                loader: ()=> fetch('../jobs.json')
            },
            {
                path:'/AppliedJobs',
                element: <AppliedJobs/>,
                loader: ()=> fetch('../jobs.json')
            }


        ]
    }
])

export default Router;