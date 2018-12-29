import React from 'react';
import ListItem from '../ListItem/ListItem';

const horizontalContainer = {
    display: 'flex',
    flexDirection: 'row',
};

const List = (props) => {
    const items = props.alerts.map(input => <ListItem alrt={input} key={input.id}/>);
    return (
        <div style={horizontalContainer}>
            <h1> List </h1>
            {items}
        </div>
    );
}

export default List;
