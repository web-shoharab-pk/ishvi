import { Grid } from "@mui/material";
import React from "react"
import { RiSearchLine } from "react-icons/ri"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import rightArrow from "./../../static/icons/rightArrow.png";
import sort from "./../../static/icons/sortAscending.svg";
import "./faq.css";
import Filter from "../../static/img/Mentor/Filter.png"

const Faq = () => {
  return (
    <div>
      <div>
        <p className="faq_question">How can we help you?</p>
        <Grid>
            <Grid sx={{  display: "flex", justifyContent: "space-between", width: "100%", alignItems:"center" }} >
                <main style={{backgroundColor: '#FFF'}} className="input_container">
                    <RiSearchLine style={{ fontSize: '30px' }} />
                    <input autoFocus placeholder='Search mentors...' />
                </main>
                <div className="arrow_icon">
                    <img src={Filter} alt="" />
                </div>
            </Grid>
        </Grid>
        <div className="d-flex align-items-center my-3 justify-content-between">
          <p className="top_question">Top Questions</p>
          <button className="sort_btn">
            <img src={sort} alt="" />
            sort
          </button>
        </div>
      </div>

      <Tabs>
        <TabList className="faq_tab_class my-3 px-1"> 
          <Tab className=" faq_category">Payment</Tab>
          <Tab className=" faq_category">Coupons</Tab>
          <Tab className=" faq_category">Reservasions</Tab>
          <Tab className="faq_category">Reservasions</Tab>
        </TabList>

        <TabPanel>
          <div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">What is a Payment Gateway?</p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                Do I need to pay to Instapay even when there is no transaction
                going on in my business?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                Is there any setup fee or annual maintainance fee that I need to
                pay regularly?
              </p>
              <img src={rightArrow} alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center question_card ">
            <p className="question">
              What platforms does ACME payment gateway support?
            </p>
            <img src={rightArrow} alt="" />
          </div>
          <div className="d-flex justify-content-between align-items-center question_card ">
            <p className="question">
              What platforms does ACME payment gateway support?
            </p>
            <img src={rightArrow} alt="" />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                Is there any setup fee or annual maintainance fee that I need to
                pay regularly?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">What is a Payment Gateway?</p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                Do I need to pay to Instapay even when there is no transaction
                going on in my business?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                Do I need to pay to Instapay even when there is no transaction
                going on in my business?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">What is a Payment Gateway?</p>
              <img src={rightArrow} alt="" />
            </div>

            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                Is there any setup fee or annual maintainance fee that I need to
                pay regularly?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                Is there any setup fee or annual maintainance fee that I need to
                pay regularly?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">What is a Payment Gateway?</p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                Do I need to pay to Instapay even when there is no transaction
                going on in my business?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center question_card ">
              <p className="question">
                What platforms does ACME payment gateway support?
              </p>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Faq;
