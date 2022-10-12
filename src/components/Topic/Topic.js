import React from 'react';

const Topic = ({topic}) => {
    const {name, logo} = topic;
    return (
        <div>
            Name: {name}
            Logo: {logo}
            
        </div>
    );
};

export default Topic;