import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from './api.js';
import { NavLink } from 'react-router-dom';

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const getCompaniesList = async() => {
      try {
        const response = await JoblyApi.getCompanies();
        setCompanies(response);
        setIsLoading(false);
      } catch(e) {
        console.error('Error fetching companies list data in CompaniesList component', e);
      }
    }
    getCompaniesList();
  }, []);
  console.log('companies response...', companies);
  
  if(isLoading) {
    return <p>Loading &hellip;</p>
  }

  return (
    <div>
      <h1>Search box... use backend endpoint</h1>
      {companies.map(company => (
        <NavLink to={`/companies/${company.handle}`} key={company.handle}>
          <CompanyCard company={company} />
        </NavLink>
      ))}
    </div>
  )
}

export default CompaniesList;