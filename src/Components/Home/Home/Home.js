import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import FindJobs from '../FindJobs/FindJobs';
import JobProcess from '../JobProcess/JobProcess';
import OurEmployee from '../OurEmployee/OurEmployee';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <>
            {/* This is Header  */}
            <Header></Header>
            {/* This is top banner  */}
            <TopBanner></TopBanner>
            {/* this is find job details component */}
            <FindJobs></FindJobs>
            {/* job process details component */}
            <JobProcess></JobProcess>
            {/* our employees  */}
            <OurEmployee></OurEmployee>
            {/* This is footer  */}
            <Footer></Footer>
        </>
    );
};

export default Home;