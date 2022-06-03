import React from 'react';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import NewsBLog from './NewsBlog';
import Reviews from './Reviews';
import Tools from './Tools';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <Welcome></Welcome>
            <About></About>
            <BusinessSummary></BusinessSummary>
            <NewsBLog></NewsBLog>
        </div>
    );
};

export default Home;