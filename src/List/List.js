import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            temp: [1,2,3,4,5]
        }
    }
    render(){
        const items = this.state.temp.map(input => <ListItem value={input} />);
        return(
            <ul>
                {items}
            </ul>
        );
    }
}

export default List;
