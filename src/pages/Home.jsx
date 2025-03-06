import React from 'react';
import Banner from '../components/Banner';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import LatestVisas from './LatestVisas';

const Home = () => {
    return (
        <div>
       <Banner></Banner>
       <LatestVisas></LatestVisas>
       <WhyChooseUs></WhyChooseUs>
       <Testimonials></Testimonials>
        </div>
    );
};

export default Home;