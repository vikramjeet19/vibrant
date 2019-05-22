import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
class Edit extends React.Component {

    componentDidMount(){
        axios.put('https://reqres.in/api/users/2',)
        .then(resolve=>console.log(resolve))
        .catch(err=>console.log(err))
    }
    render() {
        return (<Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    
                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
           
        </Container>)
    }
}


const mapStateToProps = state => {
    return {
        userData: state.redux_data
    }
}


export default withRouter(connect(mapStateToProps)(Edit));