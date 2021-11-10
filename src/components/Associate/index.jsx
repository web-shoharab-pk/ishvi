import { ArrowDownward } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import addMony from "../../static/img/Associate/icons/addMoney.png";
import more from "../../static/img/Associate/icons/more.png";
import sendMony from "../../static/img/Associate/icons/sendMoney.png";
import logo1 from "../../static/img/Associate/image/logo1.png";
import usLogo from "../../static/img/Associate/image/usLogo.png";
import BottomNav from "../Common/BottomNav";
// import BottomNav from "../../pages/inc/BottomNav";
import Analysics from "./Analysics/Analysics";
import Applications from "./Applications/Applications";
import "./Dashboard.css";
import Registrated from "./Registrated/Registrated";
import Students from "./Students/Students";

const Associate = () => {
  return (
    <div className="dashboard_body">
        {/* <div className="d-flex align-items-center justify-content-center"> */}
          <div className="transiction_container">
            <h3 className="dashboard_title mx-5">Dashboard</h3>
            <Tabs>
              <TabList className="tab_class">
                <Tab className="dashboard_category">Students</Tab>
                <Tab className="dashboard_category">Registered</Tab>
                <Tab className="dashboard_category">Applications</Tab>
                <Tab className=" dashboard_category">Others</Tab>
              </TabList>
              <TabPanel>
                <section className="container">
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <div>
                      <div className="transiction_box">
                        <div className="d-flex align-items-center justify-content-between p-1">
                          <div>
                            <h2 className="dashboard_title">
                              $1000 <ArrowDownward />{" "}
                            </h2>
                            <h5 className="dollar_title">US dollar</h5>
                          </div>
                          <div>
                            <img src={usLogo} alt="" />
                          </div>
                        </div>
                        <div className="d-flex  justify-content-evenly">
                          <button className="transiction_btn">
                            <img src={addMony} alt="" />
                          </button>
                          <button className="transiction_btn">
                            <img
                              className="cursor_style"
                              src={sendMony}
                              alt=""
                            />
                          </button>
                          <button className="transiction_btn">
                            <img className="cursor_style" src={more} alt="" />
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-3">
                          <p className="dollar_title">Transictions</p>
                          <Link className="text-primary" to="#">
                            See all
                          </Link>
                        </div>
                        <div className="d-flex align-items-start justify-content-between p-3">
                          <div className="d-flex align-items-center">
                            <img src={logo1} alt="" />
                            <div>
                              <h4 className="dashboard_title">Demo</h4>
                              <p className="dollar_title">12:10</p>
                            </div>
                          </div>

                          <h4 className="dashboard_title">$99</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
              <TabPanel>
                <section className="container">
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <div>
                      <div className=" transiction_box">
                        <div className="d-flex align-items-center justify-content-between p-1">
                          <div>
                            <h2 className="dashboard_title">
                              $999 <ArrowDownward />{" "}
                            </h2>
                            <h5 className="dollar_title">US dollar</h5>
                          </div>
                          <div>
                            <img src={usLogo} alt="" />
                          </div>
                        </div>
                        <div className="d-flex  justify-content-evenly">
                          <button className="transiction_btn">
                            <img src={addMony} alt="" />
                          </button>
                          <button className="transiction_btn">
                            <img
                              className="cursor_style"
                              src={sendMony}
                              alt=""
                            />
                          </button>
                          <button className="transiction_btn">
                            <img className="cursor_style" src={more} alt="" />
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-3">
                          <p className="dollar_title">Transictions</p>
                          <Link className="text-primary" to="#">
                            See all
                          </Link>
                        </div>
                        <div className="d-flex align-items-start justify-content-between p-3">
                          <div className="d-flex align-items-center">
                            <img src={logo1} alt="" />
                            <div>
                              <h4 className="dashboard_title">Demo</h4>
                              <p className="dollar_title">12:10</p>
                            </div>
                          </div>

                          <h4 className="dashboard_title">$99</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
              <TabPanel>
                <section className="container">
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <div>
                      <div className=" transiction_box">
                        <div className="d-flex align-items-center justify-content-between p-1">
                          <div>
                            <h2 className="dashboard_title">
                              $1111 <ArrowDownward />{" "}
                            </h2>
                            <h5 className="dollar_title">US dollar</h5>
                          </div>
                          <div>
                            <img src={usLogo} alt="" />
                          </div>
                        </div>
                        <div className="d-flex  justify-content-evenly">
                          <button className="transiction_btn">
                            <img src={addMony} alt="" />
                          </button>
                          <button className="transiction_btn">
                            <img
                              className="cursor_style"
                              src={sendMony}
                              alt=""
                            />
                          </button>
                          <button className="transiction_btn">
                            <img className="cursor_style" src={more} alt="" />
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-3">
                          <p className="dollar_title">Transictions</p>
                          <Link className="text-primary" to="#">
                            See all
                          </Link>
                        </div>
                        <div className="d-flex align-items-start justify-content-between p-3">
                          <div className="d-flex align-items-center">
                            <img src={logo1} alt="" />
                            <div>
                              <h4 className="dashboard_title">Demo</h4>
                              <p className="dollar_title">12:10</p>
                            </div>
                          </div>

                          <h4 className="dashboard_title">$99</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
              <TabPanel>
                <section className="container">
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <div>
                      <div className=" transiction_box">
                        <div className="d-flex align-items-center justify-content-between p-1">
                          <div>
                            <h2 className="dashboard_title">
                              $1200 <ArrowDownward />{" "}
                            </h2>
                            <h5 className="dollar_title">US dollar</h5>
                          </div>
                          <div>
                            <img src={usLogo} alt="" />
                          </div>
                        </div>
                        <div className="d-flex  justify-content-evenly">
                          <button className="transiction_btn">
                            <img src={addMony} alt="" />
                          </button>
                          <button className="transiction_btn">
                            <img
                              className="cursor_style"
                              src={sendMony}
                              alt=""
                            />
                          </button>
                          <button className="transiction_btn">
                            <img className="cursor_style" src={more} alt="" />
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-3">
                          <p className="dollar_title">Transictions</p>
                          <Link className="text-primary" to="#">
                            See all
                          </Link>
                        </div>
                        <div className="d-flex align-items-start justify-content-between p-3">
                          <div className="d-flex align-items-center">
                            <img src={logo1} alt="" />
                            <div>
                              <h4 className="dashboard_title">Demo</h4>
                              <p className="dollar_title">12:10</p>
                            </div>
                          </div>

                          <h4 className="dashboard_title">$99</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </TabPanel>
            </Tabs>
          </div>
        {/* </div> */}
        <div className="d-flex align-items-center justify-content-center container">
            <Analysics />
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <div style={{width:"100%"}}>
            <Students  />
            <Registrated />
            <Applications />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <BottomNav />
      </div>
  );
};

export default Associate;
