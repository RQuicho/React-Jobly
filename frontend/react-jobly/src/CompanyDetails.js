import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import CompanyCard from './CompanyCard';
import NotFoundCompany from './NotFoundCompany';

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
  console.log('company...', company);
  
  if(company === null || company && !company.handle) {
    return (
      <>
        <NotFoundCompany />
      </>
    );
  }

  return (
    <div>
      <h1>Details of company and also lists jobs</h1>
      <p>Put JobsList component here?</p>
      <CompanyCard company={company} />

    </div>
  )
}

export default CompanyDetails;