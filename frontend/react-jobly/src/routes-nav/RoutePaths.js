import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Homepage from '../Homepage';
import CompaniesList from '../companies/CompaniesList';
import JobsList from '../jobs/JobsList';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/Signupform';
import ProfileForm from '../Forms/ProfileForm';
import NotFoundList from '../not-found/NotFoundList';
import CompanyDetails from '../companies/CompanyDetails';
import ProtectedRoute from './ProtectedRoute';

const RoutePaths = ({login, signup}) => {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <ProtectedRoute path='/companies' element={<CompaniesList />} />
      <ProtectedRoute path='/companies/:handle' element={<CompanyDetails />} />
      <ProtectedRoute path='/jobs' element={<JobsList />} />
      <Route path='/login' element={<LoginForm login={login} />} />
      <Route path='/signup' element={<SignupForm signup={signup} />} />
      <ProtectedRoute path='/profile' element={<ProfileForm />} />
      <Route path='*' element={<NotFoundList />} />
    </Routes>
  )
}

export default RoutePaths;