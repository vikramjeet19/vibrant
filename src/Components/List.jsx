import React from 'react';
import { Container, Table,Button } from 'react-bootstrap';
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
        console.log(id)
        this.props.history.push('/edit')
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
                        {this.props.userData.data.map(mapper => (
                            <tr  key={mapper.id}> 
                                <td>{mapper.first_name}</td>
                                <td>{mapper.last_name}</td>
                                <td>{mapper.email}</td>
                                <td></td>
                                <td><Button variant="light" onClick={()=>this.clickedHandler(mapper.id)}>edit</Button></td>
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