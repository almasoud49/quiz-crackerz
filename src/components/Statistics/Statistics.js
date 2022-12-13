
import axios from 'axios';
import { useEffect, useState } from 'react';
import {XAxis, YAxis,Tooltip,BarChart, Bar } from 'recharts';



const Statistics = () => {
    const [topics, setTopics] = useState();

    useEffect(() =>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data=> {
            const topicsDataLoaded = data.data.data;
            const topicsData = topicsDataLoaded.map(topic =>{
                const singleTopics = {
                    name:topic.name,
                    total:topic.total
                }
                return singleTopics
            })
            
            setTopics(topicsData);
        })
        
        } ,[])
    
    
    return (
        <BarChart width={500} height={400} data={topics}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
    );

    };
export default Statistics;