import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from '../api.js';
import { NavLink } from 'react-router-dom';
import SearchForm from '../Forms/SearchForm.js';

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const search = async (name) => {
    try {
      const response = await JoblyApi.getCompanies(name);
      setCompanies(response);
    } catch(e) {
      console.error('Error fetching companies', e);
    }
  }

  useEffect(() => {
    const getCompaniesList = () => {
      search();
      setIsLoading(false);
    }
    getCompaniesList();
  }, []);
  // console.log('companies response...', companies);

  
  if(isLoading) {
    return <p>Loading &hellip;</p>
  }

  return (
    <div>
      <SearchForm search={search}/>
      {companies.map(company => (
        <NavLink to={`/companies/${company.handle}`} key={company.handle}>
          <CompanyCard company={company} />
        </NavLink>
      ))}
    </div>
  )
}

export default CompaniesList;