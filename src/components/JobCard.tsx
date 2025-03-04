import React, { useState } from "react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location, salary }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{company} - {location}</p>
      {showDetails && <p className="text-green-700 font-semibold">Salary: {salary}</p>}
      <button 
        onClick={() => setShowDetails(!showDetails)}
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default JobCard;
