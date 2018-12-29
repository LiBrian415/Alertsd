import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, FormFeedback, Label, Input, InputGroup } from 'reactstrap';
import Geocode from 'react-geocode';

import { connect } from 'react-redux';
import { alertsAddData } from '../../redux/actions';

import { GOOGLEAPIKEY } from '../../api_keys.js';

Geocode.setApiKey(GOOGLEAPIKEY);

const displayError = {
    borderColor: 'red'
};

class FormModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            titleError: false,
            locationError: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateTitle = this.validateTitle.bind(this);
        this.validateLocation = this.validateLocation.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
            titleError: false,
            locationError: false
        });
    }

    validateTitle(title){
        // validates title: 0 < length <= 100
        if (title.length > 0 && title.length <= 100){
            this.setState({
                titleError: false
            }); 
            return true;
        } else {
            this.setState({
                titleError: true
            });
            return false;
        }
    }

    validateLocation(lat, lng){
        // restricts latitude / longitude to ucsd
        if (lat >= 32.87 && lat <= 32.89 && lng >= -117.24 && lng <= -117.22){
            this.setState({
                locationError: false
            });
            return true;
        } else {
            this.setState({
                locationError: true
            })
            return false;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        Geocode.fromAddress(data.get('location')).then(
            response => {
                const lat = response.results[0].geometry.location.lat.toFixed(4);
                const lng = response.results[0].geometry.location.lng.toFixed(4);
                if(!this.validateTitle(data.get('title')) || !this.validateLocation(lat, lng)){
                    return;
                }
                const alertJSON = {
                    title: data.get('title'),
                    description: data.get('description'),
                    latitude: lat,
                    longitude: lng
                }
                this.props.addNewAlert(alertJSON);
                this.toggle();
            },
            error => {
                this.validateTitle(data.get('title'));
                this.setState({
                    locationError: true
                });
                return;
            }
        );
    }
    
    render(){
        const titleError = this.state.titleError;
        const locationError = this.state.locationError;
        return(
            <div className="ml-auto">
                <Button color="danger" onClick={this.toggle}>Alert</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered={true} fade={false}>
                    <ModalHeader toggle={this.toggle}>Form</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} noValidate>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <InputGroup>
                                    <Input type="text" name="title" placeholder="Input alert title" style={titleError ? displayError : null} invalid={titleError}/>
                                    <FormFeedback> Title is required. (max characters = 100)</FormFeedback>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input type="textarea" name="description" placeholder="Input alert description (Optional)"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="location">Location</Label>
                                <InputGroup>
                                    <Input type="text" name="location" placeholder="address, building, ..." style={locationError ? displayError : null} invalid={locationError}/>
                                    <FormFeedback> Location is required. (restricted to UCSD region.)</FormFeedback>
                                </InputGroup>
                            </FormGroup>
                            <Button color="primary">Submit</Button>
                            {' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewAlert: (newAlert) => {
            dispatch(alertsAddData(newAlert))
        }
    };
};

export default connect(null, mapDispatchToProps)(FormModal);
