import React from 'react';
import Banner from '../Banner/Banner';
import BottomSection from '../BottomSection/BottomSection';
import HomeSection from '../HomeSection/HomeSection';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HomeSection></HomeSection>
            <BottomSection></BottomSection>

        </div>
    );
};

export default Home;