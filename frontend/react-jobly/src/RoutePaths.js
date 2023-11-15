import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import Homepage from './Homepage';
import CompaniesList from './CompaniesList';
import JobsList from './JobsList';
import LoginPage from './Login';
import SignupPage from './Signup';
import ProfilePage from './Profile';
import NotFound from './NotFound';
import CompanyDetails from './CompanyDetails';

const RoutePaths = () => {
  const [handle, setHandle] = useState('');

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/companies' element={<CompaniesList />} />
      {/* <Route path={`/companies/${handle}`} element={<CompanyDetails />} /> */}
      <Route path='/jobs' element={<JobsList />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default RoutePaths;