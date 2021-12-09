import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Post from './../post/Post';

const Home = () => {
    return (
        <div className='container'>

            <Post></Post>
            <Services></Services>
        </div>
    );
};

export default Home;