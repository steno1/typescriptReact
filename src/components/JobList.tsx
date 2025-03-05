import React from "react";
import JobCard from "./JobCard";
import { jobs } from "../data/jobs";


const JobList: React.FC = () => {
  return (
    <div className="job-list-container">
      {jobs.length > 0 ? (
        <div className="job-list">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      ) : (
        <p className="no-jobs">No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;
