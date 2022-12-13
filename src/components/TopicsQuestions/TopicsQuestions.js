import React from 'react';
import QuestionDetails from '../Topics/QuestionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'

const TopicsQuestions = ({td}) => {

    return (
        <div className='p-3'><h1 className='text-left bg-green-100'>
                {td.question} 
            <FontAwesomeIcon className='h-4 w-4 ml-3' icon={faEye}></FontAwesomeIcon> 
                </h1>
            <hr />
           <div className='bg-indigo-200'>
           {
            td?.options?.map(option => <QuestionDetails
            key={option}
            option={option}
            ></QuestionDetails>)
          }
            </div> 
        </div>
    );
};

export default TopicsQuestions;