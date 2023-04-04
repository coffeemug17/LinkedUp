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
            <div><h5>{result.description}</h5></div>
            <footer>
                <Button variant="info" onClick={() => setExtendJob(!extendJob)}> Learn More?</Button>
                {extendJob 
                    ? 
                    <div>
                        <div>
                            <h5><a href={result.redirect_url}>Apply here!!</a></h5>
                        </div>
                        <div>
                            <h5>Projected Salary: ${projected_salary}</h5>
                        </div>
                        <div>
                            <Button variant="success" onClick={() => handleAddSavedJobs(result._id)}>Save Job!</Button>
                        </div>
                    </div>
                    :
                    <div></div> 
                }
            </footer>
        </div>
      );

}