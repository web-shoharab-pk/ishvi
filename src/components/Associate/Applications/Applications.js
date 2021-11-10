import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from 'react';
import { Bar, Doughnut } from "react-chartjs-2";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './Applications.css';
import ApplicationsCard from './ApplicationsCard';
import ApplicationData from './ApplicationData';

const Applications = () => {
    return (
        <div className="mt-4 container application_section">
            <h3 className="student_title">Applications</h3>

            <div className="students_anaylysics_section">
                <div className="">
                    <p className="normal_title">Spent this week</p>
                    <h4>$1,000</h4>
                    <h3 className="title"><ArrowUpwardIcon />$100</h3>
                </div>
                <div className="">
                    <Bar
                        data={{
                            labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
                            datasets: [
                                {
                                    label: "Applications",
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
                <TabList className="application_tab_class my-3">
                    <Tab className=" dashboard_category">Today follow up</Tab>
                    <Tab className=" dashboard_category">Missed follow up</Tab>
                    <Tab className=" dashboard_category">
                        All
                    </Tab>
                </TabList>
                <TabPanel>
                    {
                        ApplicationData.map(appData => (
                            <ApplicationsCard key={appData.id} ApplicationData={appData} />
                        ))
                    }
                </TabPanel>
                <TabPanel>
                    {
                        ApplicationData.map(appData => (
                            <ApplicationsCard key={appData.id} ApplicationData={appData} />
                        ))
                    }
                </TabPanel>
                <TabPanel>
                    {
                        ApplicationData.map(appData => (
                            <ApplicationsCard key={appData.id} ApplicationData={appData} />
                        ))
                    }
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Applications;