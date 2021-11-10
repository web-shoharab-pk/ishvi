import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import CollegeDetails from './components/College/Details';
// import Home from './components/Home';
// import Result from './components/Result';
// import Notifications from './components/Notification'
// import EventsList from './components/Event';
// import Accomodation from "./components/Accomodation";

import SignIn from './components/Forms/SignIn';
import SignUp from './components/Forms/SignUp'
// import ForgePassword from './components/Passwords/Forget';
// import Otp from './components/Otp';
// import RecoverPassword from './components/Passwords/RecoverPass';
// import MentorList from './components/Mentors';
// import MentorDetails from './components/Mentors/MentorDetails';
// import DashBoard from './components/Dashboards';

// import DocumentCheckList from './components/Documents/DocumentCheck';
// import UploadDocuments from './components/Documents';
// import EducationLoanList from './components/Education';
// import StudentList from './components/Student/StudentList/StudentList';
// import Associate from './components/Associate';
// import Navbar from './components/Common/Navbar';
// import BottomNav from './components/Common/BottomNav';
// import TopSlider from './components/Dashboards/Sliders/Slider1';
// import Faq from './components/Faq'
// import PostInternshipDetails from './components/Internship/PostInternshipDetails/PostInternshipDetails';
import Main from "./Main";
import ComingSoon from "./components/Global/ComingSoon";


function App() {
  return (
    <React.Fragment>
      <div className="app_body">
        <Router>
          <Switch>
            <div className="global-container">
              <Route path="/" exact component={SignIn} />
              <Route path="/SignUp" exact component={SignUp} />
              <Route path="/" component={Main} />
            </div>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;