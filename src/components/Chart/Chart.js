import React from 'react';

const Chart = ({chart}) => {
    const [name, total] = chart();
    return (
        <div>
            {
                <p>{name}</p>
                
            }
        </div>
    );
};

export default Chart;