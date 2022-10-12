import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistics = () => {
    const statistics = useRouteLoaderData();
    return (
        <div>
            <h2>This is Statistics:{statistics.length}</h2>
            {
                statistics.map(chart => <Chart
                key={chart.id}
                chart={chart}
                ></Chart>)
            }
        </div>
    );
};

export default Statistics;