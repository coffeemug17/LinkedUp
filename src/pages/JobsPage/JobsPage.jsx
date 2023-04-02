import { useEffect } from "react";
import { useState } from "react";
import JobSearchCard from "../../components/JobSearchCard/JobSearchCard";
import * as jobsAPI from "../../utilities/jobs-api"

export default function JobsPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchItem, setSearchItem] = useState('');

    async function handleSearch(searchItem) {
        const results = await jobsAPI.getSearch(searchItem);
        setSearchResults(results);
    }

    function handleSubmitJobForm(evt) {
        evt.preventDefault();
        handleSearch(searchItem);
    }

    function handleFormChange(evt) {
        setSearchItem(evt.target.value);
    }

    async function handleAddSavedJobs(id) {
        const job = await jobsAPI.saveJob(id);
    }

    const allSearchResults = searchResults.map((result, idx) => 
        <JobSearchCard result={result} key={idx} handleAddSavedJobs={handleAddSavedJobs} />);
    return (
        <>
            <h1>All Jobs</h1>
            <form onSubmit={handleSubmitJobForm}>
                <input type="text" onChange={handleFormChange} placeholder="Search for a Job!" value={searchItem}/>
                <button type="submit">Submit Query</button>
            </form>
            <hr />
            {allSearchResults}
        </>
    );
}