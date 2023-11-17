import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api';
import CompanyCard from './CompanyCard';
import JobCard from '../jobs/JobCard';
import NotFoundCompany from '../not-found/NotFoundCompany';

const CompanyDetails = () => {
  const [company, setCompany] = useState([]);
  const {handle} = useParams();
  
  useEffect(() => {
    const getCompanyDetails = async() => {
      try {
        const response = await JoblyApi.getCompany(handle);
        setCompany(response);
      } catch(e) {
        console.error('Error fetching company details in CompanyDetails component', e);
      }
    }
    getCompanyDetails();
  }, [handle]);
  // console.log('company...', company);
  
  if(company === null || company && !company.handle) {
    return (
      <>
        <NotFoundCompany />
      </>
    );
  }

  return (
    <div>
      <CompanyCard company={company} />
      {company.jobs.map(job => (
        <div key={job.id}>
          <JobCard job={job}/>
        </div>
      ))}
    </div>
  )
}

export default CompanyDetails;