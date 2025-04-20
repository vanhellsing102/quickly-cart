import React from 'react';
import Ourmission from './Ourmission';
import MySelf from './MySelf';
import WhyQuickyCart from './WhyQuickyCart';
import WhatNext from './WhatNext';
import MeetTheDev from './MeetTheDev';

const About = () => {
    return (
        <div className='mt-5 space-y-5'>
            <Ourmission></Ourmission>
            <MySelf></MySelf>
            <WhyQuickyCart></WhyQuickyCart>
            <WhatNext></WhatNext>
            <MeetTheDev></MeetTheDev>
        </div>
    );
};

export default About;