import React from 'react';
import { ArrowRightIcon} from '@heroicons/react/24/solid'

const QuizTopic = ({qt}) => {
    const {id,name,logo,total} = qt;
    
    return (
<div className="card  w-auto bg-base-100 shadow-xl">
  <figure><img src={logo} alt="" /></figure>
  <div className="card-body ">
    <h2 className="card-title">Topic Name: {name}</h2>
     <p className='text-left'>Total:  {total}</p>
    <div className="card-actions  justify-items-center ">
        <a href='/topics'><button className="btn btn-primary w-full ">Start Practice 
      <ArrowRightIcon className="h-6 ml-2 w-6 text-blue-500"/> 
      </button></a>
    
      
            
    </div>

  </div>
</div>
    );
};

export default QuizTopic;