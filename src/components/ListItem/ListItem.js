import React from 'react';

const ListItem = (props) => {
    return (
        <div className='border rounded' id={props.alrt.id}> 
            <p>{props.alrt.title}</p>
            <p>{props.alrt.description}</p>
        </div>
    );
}

export default ListItem;
