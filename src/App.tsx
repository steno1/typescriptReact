import React from "react";
import JobList from "./components/JobList";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="job-list-title">Job Listings</h1>
      <JobList />
    </div>
  );
};

export default App;
