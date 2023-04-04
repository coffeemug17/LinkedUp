import { useEffect } from "react";
import { useState } from "react";
import JobSearchCard from "../../components/JobSearchCard/JobSearchCard";
import * as jobsAPI from "../../utilities/jobs-api";
import "./SavedJobsPage.css";

export default function SavedJobsPage({ user }) {
    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(function() {
        async function getSavedJobs() {
            const allSavedJobs = await jobsAPI.getSavedJobs();
            setSavedJobs(allSavedJobs);
        }
        getSavedJobs();
    }, []);

    async function handleAddSavedJobs(id) {
        const job = await jobsAPI.saveJob(id);
    }

    const mappedSavedJobs = savedJobs.map((job, idx) => <JobSearchCard result={job} key={idx} handleAddSavedJobs={handleAddSavedJobs} />);
    return (
        <div className="SavedJobsPage">
            <h1>My Saved Jobs</h1>
            <div className="alljobs">
                {mappedSavedJobs}
            </div>
        </div>
    );
}