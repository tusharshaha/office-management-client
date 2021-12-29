import React from 'react';
import Header from '../../Shared/Header';
import FindJobs from '../FindJobs/FindJobs';
import JobProcess from '../JobProcess/JobProcess';
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
        </>
    );
};

export default Home;