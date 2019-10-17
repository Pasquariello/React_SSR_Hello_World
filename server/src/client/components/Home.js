import React from 'react';

const Home = () => {
    return (
        <div>
        <div>Im the home component</div>
        <button onClick={()=>console.log('Hello Taylor')}>Press Me!</button>
        </div>
    );
};

export default Home;