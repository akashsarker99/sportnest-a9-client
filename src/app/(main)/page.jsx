import Banner from '@/components/Banner';
import BookingStatistics from '@/components/BookingStatistics';
import FeaturedFacilities from '@/components/FeaturedFacilities';
import StepsSection from '@/components/StepsSection';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFacilities></FeaturedFacilities>
            <StepsSection></StepsSection>
            <BookingStatistics></BookingStatistics>
        </div>
    );
};

export default HomePage;