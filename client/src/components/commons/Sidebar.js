import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Col } from 'reactstrap';
import styled from 'styled-components'

const SidebarStyles = styled.div`
    background-image: url('../../images/sidebarbg.webp');
    /* background-repeat: no-repeat; */
    background-size: cover;
    height: 100vh;
`

class Sidebar extends Component {
    render() {
        return (
            <SidebarStyles>
            <Col xs="3">
                {this.props.children}
            </Col>
            </SidebarStyles>
        );
    }
}

export default withRouter(Sidebar);        