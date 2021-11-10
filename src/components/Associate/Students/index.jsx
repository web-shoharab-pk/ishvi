import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from 'react';
import { Bar, Doughnut } from "react-chartjs-2";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FollowUpCard from './FollowUpCard';
import './Students.css';

const Students = () => {
    return (
        <div>
            <h3 className="student_title">Students</h3>
            <div className="students_anaylysics_section">
                <div className="">
                    <p className="normal_title">Spent this week</p>
                    <h4>$100</h4>
                    <h3 className="title"><ArrowUpwardIcon /> $100</h3>
                </div>
                <div className="">
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
                <TabList className="tab_class my-3">
                    <Tab selectedTabClassName="react-tabs__tab--selected_follow" className="dashboard_category_follow">Today follow up</Tab>
                    <Tab selectedTabClassName="react-tabs__tab--selected_follow" className="dashboard_category_follow">Missed follow up</Tab>
                    <Tab selectedTabClassName="react-tabs__tab--selected_follow" className="dashboard_category_follow">
                        All
                    </Tab>
                </TabList>
                <TabPanel>
                    {
                        [...new Array(10)].map((res, index) => (
                            <FollowUpCard key={index} />
                        ))
                    }
                </TabPanel>
                <TabPanel>
                    {
                        [...new Array(10)].map((res, index) => (
                            <FollowUpCard key={index} />
                        ))
                    }
                </TabPanel>
                <TabPanel>
                    {
                        [...new Array(10)].map((res, index) => (
                            <FollowUpCard key={index} />
                        ))
                    }
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default Students;