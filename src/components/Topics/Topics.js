import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsQuestions from '../TopicsQuestions/TopicsQuestions';


const Topics = () => {
    const topicsData = useLoaderData().data;
    const questions = topicsData.questions;
    
    return (
        <div>
          {
            questions.map(td => <TopicsQuestions
            key={td.id}
            td={td}
            ></TopicsQuestions>)
          } 
            
        </div>
    );
};

export default Topics;