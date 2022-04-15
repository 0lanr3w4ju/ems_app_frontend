import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';

import { LoginForm, RegisterForm } from './login_register/index';

const MainPage = ({}) => {

    return (
      <Router>
        <Routes>
          <Route exact path='' element={<LoginForm />} />
          <Route exact path='/signup' element={<RegisterForm />} />
        </Routes>
      </Router>
    )
}

export default MainPage;