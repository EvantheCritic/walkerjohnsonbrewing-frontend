import axios from 'axios';
import { useEffect, useState } from 'react';

function mapJobs(job) {
    return (
        <div class="job-card">
            <div class="job-property">Job ID: { job.conID }</div>
            <div class="job-property">Order Name: { job.name }</div>
            <div class="job-property">Catering Service: { job.serviceType }</div>
            <div class="job-property">Cook 1: { job.cook1 }</div>
            <div class="job-property">Cook 2: { job.cook2 }</div>
            <div class="job-property">Server: { job.server }</div>
            <div class="job-property">Deliverer: { job.deliverer }</div>
            <div class="job-property">Date completed: { job.date }</div>
        </div>
    )
}

function CompletedJobs() {
    const [completedJobs, setCompletedJobs] = useState([]);

    useEffect(() => {
        axios.get("https://walkerjohnsonbrewing-server-fd63de77b2c7.herokuapp.com/CompletedJobs").then((result) => {
            console.log(result);
            setCompletedJobs(result.data);
        });
    }, []);

    return (
        <div className="Jobs">
            <div id="job-hero">
                <p>Below is a list of all the jobs the Walker Johnson crew have completed</p>
            </div>
            <div className="menu-section">
                <div id="job-section">
                    <div className="emp-grid">
                    {completedJobs.map(mapJobs)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompletedJobs;
