import React from 'react';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import NewsBLog from './NewsBlog';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <About></About>
            <NewsBLog></NewsBLog>
        </div>
    );
};

export default Home;