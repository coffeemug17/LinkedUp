import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./JobSearchCard.css"

export default function JobSearchCard({ result, handleAddSavedJobs }) {
    const [extendJob, setExtendJob] = useState(false);
    const projected_salary = (result.salary_max + result.salary_min)/2;
    return (
        <div className="JobSearchCard">
            <header>{result.title} &nbsp; | &nbsp; {result.company} &nbsp; - &nbsp; {result.location}
            </header>
            <div>{result.description}</div>
            <footer>
                <button onClick={() => setExtendJob(!extendJob)}> Learn More?</button>
                {extendJob 
                    ? 
                    <div>
                        <div>
                            <a href={result.redirect_url}>Apply here!!</a>
                        </div>
                        <div>
                            Projected Salary: ${projected_salary}
                        </div>
                        <div>
                            <button onClick={() => handleAddSavedJobs(result._id)}>Save Job!</button>
                        </div>
                    </div>
                    :
                    <div></div> 
                }
            </footer>
        </div>
      );

}