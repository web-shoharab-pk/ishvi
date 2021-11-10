import React, {Component, Fragment} from 'react';
import {Route} from "react-router-dom";
import DashBoard from "./components/Dashboards";
import StudentList from "./components/Student/StudentList/StudentList";
import EducationLoanList from "./components/Education";
import Result from "./components/Result";
import CollegeDetails from "./components/College/Details";
import Associate from "./components/Associate";
import Accomodation from "./components/Accomodation";
import ForgePassword from "./components/Passwords/Forget";
import Otp from "./components/Otp";
import RecoverPassword from "./components/Passwords/RecoverPass";
import MentorList from "./components/Mentors";
import MentorDetails from "./components/Mentors/MentorDetails";
import Notifications from "./components/Notification";
import Faq from "./components/Faq";
import PostInternshipDetails from "./components/Internship/PostInternshipDetails/PostInternshipDetails";
import BottomNav from "./components/Common/BottomNav";
import Navbar from "./components/Common/Navbar";
import SearchForm from "./components/Common/Search/SearchForm";
import ComingSoon from "./components/Global/ComingSoon";

class Main extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Route path="/dashboard" exact component={DashBoard} />
                <Route exact path="/student-list" component={StudentList} />
                <Route exact path="/EducationLoanList" component={EducationLoanList} />
                <Route path="/result" component={Result} />
                <Route path="/CollegeDetails" component={CollegeDetails} />
                {/*<Route path="/signIn" component={SignIn} />*/}
                {/*<Route path="/signUp" component={SignUp} />*/}
                <Route path="/associates" component={Associate} />
                <Route path="/accomodation" component={Accomodation} />
                <Route path="/forgetPassword" component={ForgePassword} />
                <Route path="/Otp" component={Otp} />
                <Route path="/recoverPassword" component={RecoverPassword} />
                <Route path="/mentorList" component={MentorList} />
                <Route path="/mentorDetails" component={MentorDetails} />
                <Route path="/CollegeDetails/:id" component={CollegeDetails} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/faq" component={Faq} />
                <Route path="/postInternshipDetails" component={PostInternshipDetails} />
                <Route path="/Search" component={SearchForm} />
                <Route path="/ComingSoon" component={ComingSoon} />
                 <BottomNav />
            </Fragment>
        );
    }
}

export default Main;