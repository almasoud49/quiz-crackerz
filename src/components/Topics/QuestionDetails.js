import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'

const QuestionDetails = ({option}) => {
       return (
      <div>
        
<div className='flex items-center ml-5' >
           <FontAwesomeIcon className='h-3 w-3 mr-3' icon={faCompactDisc}></FontAwesomeIcon> 
            <p>{option}</p>
        </div>
      </div>
    );
};

export default QuestionDetails;