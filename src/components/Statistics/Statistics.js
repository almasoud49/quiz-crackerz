
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';



const Statistics = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            {
            data.data.map(chart => (
                <Chart
                key={chart.id}
                chart={chart}
                ></Chart>
            ))
            }

        </div>
    );
};

export default Statistics;