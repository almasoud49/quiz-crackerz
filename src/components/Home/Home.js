import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = () => {
    const quizTopics = useLoaderData();
    const data = quizTopics.data;
    return (
<div className=''>
    <h1 className='mt-3 font-bold p-3 text-3xl '>Padma Multipurpose Bridge in Brief</h1>
<div className="card card-side bg-base-100  ml-10">
  <figure><img src="https://www.newagebd.com/files/records/news/202206/174226_157.jpg"  alt=""/></figure>
  
<p className='text-justify ml-5 mr-5'>The Padma Bridge is a multipurpose road-rail bridge across the Padma River to be constructed in Bangladesh. When completed it will be the largest bridge in Bangladesh and the first fixed river crossing for road traffic. It will connect Louhajong, Munshiganj to Shariatpur and Madaripur, linking the south-west of the country, to northern and eastern regions..</p>
</div>

<div className='grid grid-cols-4 gap-4 mt-10'>
{
    data.map(qt => <QuizTopic
    key={qt.id}
    qt={qt}
    ></QuizTopic>)
}
</div>
</div>
    );
};

export default Home;