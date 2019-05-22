import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class List extends React.Component {

    state = {
        data: []
    }
    componentDidMount() {
        Axios.get('https://reqres.in/api/users?page=2')
            .then(resolve => {
                this.setState({ data: resolve.data })
                this.props.onload(this.state.data);
            })
            .catch(err => console.log(err))
    }
    clickedHandler=(id)=>{
        console.log('clicked')
    }

    render() {
        let vicky;
        if (this.props.userData.data) {
            vicky = (
                <Table striped bordered  hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(this.props.userData.data)}
                        {this.props.userData.data.map(key => (
                            <tr  key={key.id} onClick={this.clickedHandler(key.id)}> 
                                <td>{key.first_name}</td>
                                <td>{key.last_name}</td>
                                <td>{key.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
        }
        return (<Container style={{ marginTop: '50px' }}>
            {vicky}
        </Container>)
    }
}

const mapStateToProps = state => {
    return {
        userData: state.redux_data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onload: (data) => dispatch({ type: 'onload', payload: data })
    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));