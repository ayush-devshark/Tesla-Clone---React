import React from 'react';
import './Home.css';
import Section from './Section';

function Home() {
    return (
        <div className='container'>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                model='s'
            />

            <Section
                title='Model Y'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                model='y'
            />

            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                model='three'
            />
            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                model='x'
            />
            <Section
                title='Solar Panels'
                description='Lowest Cost Solar Panels in America'
                leftBtnText='Order Now'
                rightBtnText='learn more'
                model='solar'
            />
            <Section
                title='Solar Roof'
                description='Produce Clean Energy From Your Roof'
                leftBtnText='Order Now'
                rightBtnText='learn more'
                model='roof'
            />
            <Section
                title='Accessories'
                description=''
                leftBtnText='shop now'
                rightBtnText=''
                model='accessories'
            />
        </div>
    );
}

export default Home;
