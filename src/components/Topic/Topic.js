import React from 'react';

const Topic = ({topic}) => {
    const {name, logo} = topic;
    return (
        <div>
            Name: {name}
            
        </div>
    );
};

export default Topic;