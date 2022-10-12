import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistics = () => {
    
    const statistics = useRouteLoaderData();
    console.log(statistics)
    return (
        <div>
            
            
        </div>
    );
};

export default Statistics;