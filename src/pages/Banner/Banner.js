import React from 'react';
import banner from '../../ATG intern/banner/Rectangle 2.png';
import './Banner.css'

const Banner = () => {
    return (
        <div >
            <img className='header-img' width='100%' src="https://i.ibb.co/kQY1Txn/Rectangle-2.png" alt="" />

            <div className='container' style={{ color: 'white', marginTop: '-14%', position: 'absolute', zIndex: 1 }}>
                <h1 >Computer Engineering</h1>
                <p style={{ fontSize: '18px' }}>142,765 Computer Engineers follow this</p>
            </div >
            {/* <div className='container' style={{ color: 'white', marginTop: '-15%', position: 'absolute', zIndex: 1 }}>
                <h1 >Computer Engineering</h1>
                <p style={{ fontSize: '18px' }}>142,765 Computer Engineers follow this</p>
            </div> */}

        </div >
    );
};

export default Banner;