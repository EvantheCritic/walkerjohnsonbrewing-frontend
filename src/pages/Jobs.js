import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function mapJobs1(job) {
    return (
        <div class="job-card">
            <div class="job-property">Job ID: { job.conID }</div>
            <div class="job-property">Beer: { job.beer }</div>
            <div class="job-property">Sauce: { job.sauce }</div>
            <div class="job-property">Side 1: { job.side1 }</div>
            <div class="job-property">Side 2: { job.side2 }</div>
            <div class="job-property">Side 3: { job.side3 }</div>
            <div class="job-property">Order Name: { job.name }</div>
        </div>
    );
}

function mapJobs2(job) {
    return (
        <div class="job-card">
            <div class="job-property">Job ID: { job.conID }</div>
            <div class="job-property">Beer: { job.beer }</div>
            <div class="job-property">Meat 1: { job.meat1 }</div>
            <div class="job-property">Meat 2: { job.meat2 }</div>
            <div class="job-property">Meat 3: { job.meat3 }</div>
            <div class="job-property">Side 1: { job.side1 }</div>
            <div class="job-property">Side 2: { job.side2 }</div>
            <div class="job-property">Side 3: { job.side3 }</div>
            <div class="job-property">Order Name: { job.name }</div>
        </div>
    );
}

function mapJobs3(job) {
    return (
        <div class="job-card">
            <div class="job-property">Job ID: { job.conID }</div>
            <div class="job-property">Beer 1: { job.beer1 }</div>
            <div class="job-property">Beer 2: { job.beer2 }</div>
            <div class="job-property">Snack 1: { job.snack1 }</div>
            <div class="job-property">Snack 2: { job.snack2 }</div>
            <div class="job-property">Snack 3: { job.snack3 }</div>
            <div class="job-property">Snack 4: { job.snack4 }</div>
            <div class="job-property">Order Name: { job.name }</div>
        </div>
    );
}

function mapEmployees(emp) {
    return (
        <div class="employee">
            <div class="emp-property">Employee Name: { emp.name }</div>
            <div class="emp-property">Job: { emp.job_title }</div>
            <div class="emp-property">Years of experience: { emp.experience }</div>
            <div class="emp-property">Number of completed jobs: { emp.jobs_completed }</div>
            <div class="emp-property">Pay: ${ emp.pay }</div>            
        </div>
    );
}

function Jobs() {
    const [Jobs1, setJobs1] = useState([]);
    const [Jobs2, setJobs2] = useState([]);
    const [Jobs3, setJobs3] = useState([]);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        console.log("One");
        axios.get("http://localhost:2999/Jobs?table=catering1").then((result) => {
            console.log(result);
            setJobs1(result.data);
        });
    }, []);

    useEffect(() => {
        console.log("Two");
        axios.get("http://localhost:2999/Jobs?table=catering2").then((result) => {
            console.log(result);
            setJobs2(result.data);
        });
    }, []);

    useEffect(() => {
        console.log("Three");
        axios.get("http://localhost:2999/Jobs?table=catering3").then((result) => {
            console.log(result);
            setJobs3(result.data);
        });
    }, []);

    useEffect(() => {
        console.log("Four");
        axios.get("http://localhost:2999/Jobs?table=employees").then((result) => {
            console.log(result);
            setEmployees(result.data);
        });
    }, []);

    return(
        <div className="Jobs">
            <div id="job-hero">
                <p>Now Hiring! Delivery drivers needed. Please order a catering service and your name might be hired!</p>
            </div>
            <div className="menu-section">
                <h2 className="menu-header">Employees</h2>
                <div id="job-section">
                    <div className="emp-grid">
                    {employees.map(mapEmployees)}
                    </div>
                </div>
            </div>
            <div className="completed-jobs-section">
                <Link to="/CompletedJobs" id="writeReviewBtn">
                    Recently completed jobs
                </Link>
            </div>
            <div className="menu-section">
                <h2 className="menu-header">Jobs</h2>
                <div className="job-section">
                    <h3>Chicken Service Orders</h3>
                    <div className="job-grid">
                    {Jobs1.map(mapJobs1)}
                    </div>
                    <h3>Barbecue Service Orders</h3>
                    <div className="job-grid">
                    {Jobs2.map(mapJobs2)}
                    </div>
                    <h3>Beer Service Orders</h3>
                    <div className="job-grid">
                    {Jobs3.map(mapJobs3)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs;