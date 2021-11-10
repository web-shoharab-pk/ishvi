import React from 'react'
import HeadMentor from './Head'
import MentorCard from './Cards'
import BottomNav from '../Common/BottomNav'
// import BottomNav from '../../pages/inc/BottomNav'

const MentorList = () =>{
    return(
        <>
        <HeadMentor />
        <MentorCard />
        <BottomNav />
        </>
    )
}

export default MentorList