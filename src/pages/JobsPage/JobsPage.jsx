import { useEffect } from "react";
import { useState } from "react";
import JobSearchCard from "../../components/JobSearchCard/JobSearchCard";
import * as jobsAPI from "../../utilities/jobs-api"
import Button from 'react-bootstrap/Button';
import "./JobsPage.css";

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
            <form onSubmit={handleSubmitJobForm} className="JobSearchForm">
                
                <input className="textarea" type="text" onChange={handleFormChange} placeholder="Search for a Job!" value={searchItem}/>
                <div className="button">
                    <Button variant="success" type="submit">Submit Query</Button>
                </div>
            </form>
            <hr />
            {allSearchResults}
        </>
    );
}