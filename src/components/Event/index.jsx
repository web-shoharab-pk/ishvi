import React, { useState } from "react";
import PageTitle from "../PageTitle";
import EventsNav from "./EventsNav";
import EventsCard from "./EventsCard";

const EventsList = () => {
    const [toggle, setToggle] = useState({
        forYou: false,
        trending: false,
        upcoming: false,
    });
    return (
        <div className="global-container">
            <PageTitle pageTitle={`Events List`} bold />
            <EventsNav toggle={toggle} setToggle={setToggle} />
            <EventsCard />
            <EventsCard />
            <EventsCard />
        </div>
    );
};

export default EventsList;