import React from 'react';
import { Circles } from 'react-loader-spinner';
import './Home.css'

const Home = () => {
    return (
        <div className='home-circle'>
           
           <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>
    );
};

export default Home;