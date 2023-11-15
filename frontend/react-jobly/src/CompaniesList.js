import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from './api.js';

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);
  
  useEffect(() => {
    const getComapniesList = async() => {
      try {
        const response = await JoblyApi.getCompanies();
        setCompanies(response);
      } catch(e) {
        console.error('Error fetching companies list data in CompaniesList component', e);
      }
    }
    getComapniesList();
    console.log('companies response...', companies);
  }, []);

  return (
    <div>
      <h1>Search box... use backend endpoint</h1>

      {companies.map(company => (
        <CompanyCard company={company}/>
      ))}
    </div>
  )
}

export default CompaniesList;