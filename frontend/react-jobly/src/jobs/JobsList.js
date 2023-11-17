import React, {useEffect, useState} from 'react';
import JoblyApi from '../api';
import SearchForm from '../Forms/SearchForm';
import JobCard from './JobCard';

const JobsList = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const search = async (name) => {
    try {
      const response = await JoblyApi.getJobs(name);
      setJobs(response);
    } catch(e) {
      console.error('Error fetching companies', e);
    }
  }

  useEffect(() => {
    const getJobsList = () => {
      search();
      setIsLoading(false);
    }
    getJobsList();
  }, []);

  if(isLoading) {
    return <p>Loading &hellip;</p>
  }

  return (
    <div>
      <SearchForm search={search} />
      {jobs.map(job => (
        <div key={job.id}>
          <JobCard job={job}/>
        </div>
      ))}
    </div>
  )

}

export default JobsList;