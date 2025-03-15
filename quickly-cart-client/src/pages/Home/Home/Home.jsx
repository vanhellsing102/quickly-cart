import React from 'react';
import Banner from '../Banner';
import DisForOccasion from '../DisForOccasion/DisForOccasion';
import GiftForKids from '../GiftsForKids/GiftForKids';
import Cashback from '../Cashback';
import Explore from '../Explore';
import Food from '../Food/Food';
import Benefit from '../Benefit';
import BrandSection from '../BrandSection';
import FashionSection from '../FashionSection';

const Home = () => {
    return (
        <div className='space-y-[80px]'>
            <Banner></Banner>
            <DisForOccasion></DisForOccasion>
            <FashionSection></FashionSection>
            <Benefit></Benefit>
            <GiftForKids></GiftForKids>
            <Cashback></Cashback>
            <Explore></Explore>
            <BrandSection></BrandSection>
            <Food></Food>
        </div>
    );
};

export default Home;