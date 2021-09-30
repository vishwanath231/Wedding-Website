import React from 'react';
import Navbar from './Layout/Navbar/Navbar';
import Header from './Layout/Header/Header';
import Couple from './Layout/Couple/Couple';
import Story from './Layout/Story/Story';
import Gallery from './Layout/Gallery/Gallery';
import Gift from './Layout/Gift/Gift';


const Home = () => {
    return (
        <div>
            <Navbar />
            <div id="home">
                <Header />
            </div>
            <div id="couple">
                <Couple />
            </div>
            <div id="ourStory">
                <Story />
            </div>
            <div id="gallery">
                <Gallery />
            </div>
            <div id="giftRegistry">
                <Gift />
            </div>
        </div>
    )
}

export default Home;


