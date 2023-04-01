import { useState } from "react";
import JobSearchCard from "../../components/JobSearchCard/JobSearchCard";
import * as jobsAPI from "../../utilities/jobs-api";

export default function SavedJobsPage() {
    const [savedJobs, setSavedJobs] = useState([]);

    async function getSavedJobs() {
        const allSavedJobs = await jobsAPI.getSavedJobs();
        setSavedJobs(allSavedJobs);
    }
    const mappedSavedJobs = savedJobs.map((job, idx) => <JobSearchCard result={job} key={idx} />);
    return (
        <>
            <h1>Saved Jobs</h1>
            <button onClick={getSavedJobs}>Gte </button>
            {mappedSavedJobs}
        </>
    );
}