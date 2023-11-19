import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';

const JobCard = ({id, job}) => {
  const {hasAppliedToJob, applyToJob} = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(() => {
    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  const handleApply = async (e) => {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <div>
      <p>{job.title}</p>
      <p>{job.companyName}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      <button
        onClick={handleApply}
        disabled={applied}
      >
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  )
}

export default JobCard;