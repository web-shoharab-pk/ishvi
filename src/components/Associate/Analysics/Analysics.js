import React from 'react';
import './Analysics.css';
import { Bar } from "react-chartjs-2";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Analysics = () => {

    return (
        <div className="">
            <p className="normal_title mt-5 mb-3 mx-3">Analysics</p>

            <section className="d-flex justify-content-between align-items-center" style={{ height: '254px', margin: "15px 0px", width: "100%" }}>

                <div className="chart_section">
                    <p className="normal_title">Spent this week</p>
                    <h4>$100</h4>
                    <h3 className="title"><ArrowUpwardIcon /> $100</h3>
                    <div className="anaylytics_chart">
                        <Bar
                            data={{
                                labels: ["", "", "", "", "", "", ""],
                                datasets: [
                                    {
                                        backgroundColor: "#1B6CFC",
                                        borderColor: "#F2F4F5",
                                        borderRadius: 20,
                                        borderWidth: 5,
                                        data: [35, 35, 81, 22, 22],
                                    },
                                ],
                            }}
                            height={100}
                            width={150}
                            options={{
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                </div>

                <div className="anaylytics_section_2">
                    <div className="content">
                        <p className="normal_title">left to spend</p>
                        <h4>$100</h4>
                        <p className="normal_title">12 days left</p>
                    </div>
                    <div className="chart_section_2">
                        <div className="col_chart"></div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Analysics;