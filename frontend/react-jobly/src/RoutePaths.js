import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Homepage from './Homepage';
import CompaniesList from './companies/CompaniesList';
import JobsList from './jobs/JobsList';
import LoginForm from './Forms/LoginForm';
import SignupForm from './Forms/Signupform';
import ProfilePage from './Profile';
import NotFoundList from './not-found/NotFoundList';
import CompanyDetails from './companies/CompanyDetails';

const RoutePaths = ({login, signup}) => {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/companies' element={<CompaniesList />} />
      <Route path='/companies/:handle' element={<CompanyDetails />} />
      <Route path='/jobs' element={<JobsList />} />
      <Route path='/login' element={<LoginForm login={login} />} />
      <Route path='/signup' element={<SignupForm signup={signup} />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='*' element={<NotFoundList />} />
    </Routes>
  )
}

export default RoutePaths;