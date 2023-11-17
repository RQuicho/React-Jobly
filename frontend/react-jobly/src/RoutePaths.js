import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Homepage from './Homepage';
import CompaniesList from './companies/CompaniesList';
import JobsList from './jobs/JobsList';
import LoginPage from './Login';
import SignupPage from './Signup';
import ProfilePage from './Profile';
import NotFoundList from './NotFoundList';
import CompanyDetails from './companies/CompanyDetails';

const RoutePaths = () => {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/companies' element={<CompaniesList />} />
      <Route path='/companies/:handle' element={<CompanyDetails />} />
      <Route path='/jobs' element={<JobsList />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='*' element={<NotFoundList />} />
    </Routes>
  )
}

export default RoutePaths;