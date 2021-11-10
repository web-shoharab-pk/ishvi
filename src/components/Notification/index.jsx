import React from 'react'
import BottomNav from '../Common/BottomNav'
import PageTitle from '../PageTitle'
import Card from './Card/idex'

const Notifications = () => {
    return (
        <div style={{ backgroundColor: '#fafafa' }}>
            <div className='global-container'>
                <PageTitle pageTitle={`Notification`} />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <BottomNav />
        </div>
    )
}

export default Notifications
