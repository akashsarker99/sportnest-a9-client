import Banner from '@/components/Banner';
import FeaturedFacilities from '@/components/FeaturedFacilities';
import StepsSection from '@/components/StepsSection';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFacilities></FeaturedFacilities>
            <StepsSection></StepsSection>
        </div>
    );
};

export default HomePage;