import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import List from '../List/List';
import Map from '../Map/Map';
import { Container } from 'reactstrap';
import { alertsRefreshData } from '../../redux/actions';
import { connect } from 'react-redux';

const mainContainer = {
    height: '100vh',
    width: '100%'
}

class Body extends Component {
    componentDidMount() {
        this.props.updateAlerts();
    }
    
    render() {
        if(this.props.error){
            return(
                <Container className='text-center'>
                    <h1 className='display-1 mt-5'>AlertSD</h1>
                    <p>Site is currently down</p>
                </Container>
            )
        }
        return(
            <div>
                <Nav />
                <Container className='mt-3 mb-3' style={mainContainer}>
                    <List alerts={this.props.alerts}/>
                    {/* <Map alerts={this.props.alerts}/> */}
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alerts: state.alerts,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAlerts: () => dispatch(alertsRefreshData()) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);

