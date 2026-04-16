import Banner from '@/components/Banner/Banner';
import BannerCards from '@/components/Banner/BannerCards';
import FriendsDetails from '@/components/FriendsDetails/FriendsDetails';
import React from 'react';

const HomePage = () => {
    return (
        <div>
           <Banner> </Banner>
           <BannerCards></BannerCards>
           <hr className="border-gray-400 opacity-30 mb-4 max-w-5xl mx-auto" />
           <FriendsDetails></FriendsDetails>
        </div>
    );
};

export default HomePage;