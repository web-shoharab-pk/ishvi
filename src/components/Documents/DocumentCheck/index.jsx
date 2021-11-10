import React from 'react'
import BottomNav from '../Common/BottomNav'
import PageTitle from '../../PageTitle'
import Contents from './Contents'
import FeaturedCards from './FeaturedCards'

const DocumentCheckList = () => {
    const header = {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between'
    }
    const featured = {
        display : 'flex',
        flex : 1,
        // justifyContent : 'space-evenly',
        overflow : 'auto',
        marginRight : '5%'
    }
    return (
        <div>
            <div className='global-container'>
            <Contents />
            <div style={header}>
            <PageTitle pageTitle='Featured Doctors' bold/> 
            <p>See all</p>
            </div>
            <main style={featured}>
            <FeaturedCards />
            <FeaturedCards />
            <FeaturedCards />
            </main>
            </div>
            <BottomNav />
        </div>
    )
}

export default DocumentCheckList
