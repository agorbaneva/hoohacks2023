import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../careers.css'

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3 className="job-title">{job.job_title}</h3>
        <p className="job-location">{job.job_city}, {job.job_state}, {job.job_country}</p>
      </div>
      <div className="job-content">
        <div className="job-left">
          {job.employer_logo && <img className="job-logo" src={job.employer_logo} alt={`${job.employer_name} logo`} />}
          <p className="job-employer"><strong>Employer:</strong> {job.employer_name}</p>
          <p className="job-employment-type"><strong>Employment Type:</strong> {job.job_employment_type}</p>
          <p className="job-posted-at"><strong>Posted At:</strong> {new Date(job.job_posted_at_timestamp * 1000).toLocaleString()}</p>
        </div>
        <div className="job-right">
        <p className="job-description">{job.job_description.slice(0, 1000)}{job.job_description.length > 1000 ? "..." : ""}</p>
          <button className="job-apply-btn" onClick={() => window.open(job.job_apply_link, "_blank")}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

const Careers = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: { query: 'Software', page: '1', num_pages: '10' },
      headers: {
        'X-RapidAPI-Key': 'b17f17c9bfmshc40d3eba5011ac5p117a54jsn92999ecc513f',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setJobData(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div id="jobs" className="careers">
      <h1 className="jobsSectionTitle">Job Listings</h1>
      <div className="job-listings">
        {jobData.map((job) => (
          <JobCard key={job.job_id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Careers;
