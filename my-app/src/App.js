import { Route, Switch, Redirect } from 'react-router-dom'
import AddNewStudentCard from './UI/AddNewStudentCard'
import ReviewFormCard from './UI/ReviewFromCard'
import SubmitCorrectionCard from './UI/SubmitCorrectionCard'
import StudentPage from './Components/StudentPage'
import AuthCard from './UI/AuthCard'
import SearchPage from './Components/SearchPage'
import ResultPage from "./Components/ResultPage";
import {useContext, useState} from 'react'

import './App.css';
import './index.css'
import AuthContext from './auth-store/auth-context'
import * as React from "react";

function App() {
  const authCtx = useContext(AuthContext)
    const [text, searchText] = useState('');
  return (
    <Switch>
      {!authCtx.isLoggedIn && (
        <Route path="/auth">
          <AuthCard />
        </Route>
      )}
        <Route path='/' exact>
            <Redirect to='/main' />
        </Route>
        <Route path="/main">
            <SearchPage />
        </Route>
        <Route path="/result" exact>
            <ResultPage />
        </Route>
        <Route path="/studentPage">
            <StudentPage />
        </Route>
      {authCtx.isLoggedIn && (
        <Route path="/addStudent">
          <AddNewStudentCard />
        </Route>
      )}
      {authCtx.isLoggedIn && (
        <Route path="/review">
          <ReviewFormCard />
        </Route>
      )}

      {authCtx.isLoggedIn && (
        <Route path="/correction">
          <SubmitCorrectionCard />
        </Route>
      )}


      <Route path="*">
        <Redirect to="/main" />
      </Route>
    </Switch>
  );
}

export default App;