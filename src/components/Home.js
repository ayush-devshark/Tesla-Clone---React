import React from 'react';
import './Home.css';
import Section from './Section';

function Home() {
    return (
        <div className='container'>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-s.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                model='s'
            />

            <Section
                title='Model Y'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-y.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                model='y'
            />

            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-3.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                model='three'
            />
            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-x.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                model='x'
            />
        </div>
    );
}

export default Home;
