import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.job_title}</h3>
      <p><strong>Employer:</strong> {job.employer_name}</p>
      {job.employer_logo && <img src={job.employer_logo} alt={`${job.employer_name} logo`} />}
      <p><strong>Job ID:</strong> {job.job_id}</p>
      <p><strong>Employment Type:</strong> {job.job_employment_type}</p>
      <p><strong>Location:</strong> {job.job_city}, {job.job_state}, {job.job_country}</p>
      <p><strong>Posted At:</strong> {new Date(job.job_posted_at_timestamp * 1000).toLocaleString()}</p>
      <a href={job.job_apply_link} target="_blank" rel="noreferrer">Apply Now</a>
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
        setJobData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Job Listings</h1>
      <div className="job-listings">
        {jobData.map((job) => (
          <JobCard key={job.job_id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Careers;
