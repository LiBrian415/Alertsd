import React from 'react';

const marker = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '15px',
    height: '15px',
    backgroundColor: '#000',
    border: '2px solid #fff',
    borderRadius: '100%',
}

const AlertPin = (props) => {
    return (
        <div style={marker}>
        </div>
    ) 
}

export default AlertPin;
