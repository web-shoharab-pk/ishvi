import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from 'react';
import { Bar, Doughnut } from "react-chartjs-2";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StudentsCard from './StudentsCard';
import './Students.css';
import studentsData from "./studentsData"
import logo1 from '../../../static/img/Associate/image/logo1.png';



const Students = () => {
    return (
        <div className="container students_section">
            <h3 className="student_title">Students</h3>
            <div className="students_anaylysics_section">
                <div className="">
                    <p className="normal_title">Spent this week</p>
                    <h4>$100</h4>
                    <h3 className="title"><ArrowUpwardIcon /> $100</h3>
                </div>
                <div className="students_chart">
                    <Bar
                        data={{
                            labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
                            datasets: [
                                {
                                    label: "Students",
                                    backgroundColor: "#1B6CFC",
                                    borderColor: "#F2F4F5",
                                    borderRadius: 20,
                                    borderWidth: 5,
                                    data: [35, 35, 81, 22, 22],
                                },
                            ],
                        }}
                        height={200}
                        width={250}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }}
                    />
                </div>
            </div>

            <div className="d-flex justify-content-around student_budget">
                <div>
                    <div className="chart_1">
                        <Doughnut
                            data={{
                                datasets: [
                                    {
                                        data: [10, 10],
                                        backgroundColor: ["#1b6cfc", "#F2F4F5"],
                                    },
                                ],
                            }}
                            height={20}
                            width={20}
                            options={{
                                maintainAspectRatio: true,
                            }}
                        />
                    </div>
                </div>
                <div>
                    <h3 className="budget_text">Monthly Budget</h3>
                    <h4 className="budget_title">$140/day</h4>

                </div>
                <div>
                    <h3 className="budget_text">$1000 left</h3>
                    <h4 className="budget_title">of $2000</h4>
                </div>
            </div>
            <Tabs>
                <TabList className="student_tab_class">
                    <Tab selectedTabClassName="react-tabs__tab--selected_follow" className="dashboard_category_follow">Today follow up</Tab>
                    <Tab selectedTabClassName="react-tabs__tab--selected_follow" className="dashboard_category_follow">Missed follow up</Tab>
                    <Tab selectedTabClassName="react-tabs__tab--selected_follow" className="dashboard_category_follow">
                        All
                    </Tab>
                </TabList>
                <TabPanel>
                    <a href="https://app.bscglobaledu.com/StudentList" target="_blank" rel="noreferrer" >
                        <div className="d-flex justify-content-around align-items-center follow_up_card">
                            <div>
                                <img src={logo1} alt="" />
                            </div>
                            <div>
                                <h3 className="budget_text">Yet to Call</h3>
                                <h4 className="budget_title">18 transactions</h4>

                            </div>
                            <div>
                                <h3 className="budget_text">$99</h3>
                                <h4 className="budget_title">51%</h4>
                            </div>
                        </div>
                    </a>
                    {
                        studentsData.map(stData => (
                            <StudentsCard key={stData.id} studentsData={stData} />
                        ))
                    }
                </TabPanel>
                <TabPanel>
                    {
                        studentsData.map(stData => (
                            <StudentsCard key={stData.id} studentsData={stData} />
                        ))
                    }
                </TabPanel>
                <TabPanel>
                    {
                        studentsData.map(stData => (
                            <StudentsCard key={stData.id} studentsData={stData} />
                        ))
                    }
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default Students;