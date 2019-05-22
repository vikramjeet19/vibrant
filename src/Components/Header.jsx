import React from 'react';
import {Navbar} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
const Header=(props) => {
    const clicked=()=>{
        props.history.push('/')
    }
    return (<>
        <Navbar bg="dark">
            <Navbar.Brand onClick={clicked}>Vibrant</Navbar.Brand>
        </Navbar>
    </>)

}
export  default withRouter(Header);