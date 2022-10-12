import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-2xl font-medium m-10'>Question's Answer</h2>
        <div className="collapse">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium text-left">
            Question-1: What is the purpose of react router?
        </div>
        <div className="collapse-content text-justify"> 
            <p>React Router-enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL- is a standard library for routing in React.</p>
        </div>
        </div>
        {/*  */}
        <div className="collapse">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium text-left">
        Question-2: How does context API work?
        </div>
        <div className="collapse-content text-justify"> 
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        </div>
        </div>
        {/*  */}
        <div className="collapse">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium text-left">
        Question-3: What is useRef hook?
        </div>
        <div className="collapse-content text-justify"> 
            <p>The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        </div>
        </div>
        </div>
    );
};

export default Blog;