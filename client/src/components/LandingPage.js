import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap';
import styled from 'styled-components'

const LandingPageStyle = styled.div`
    text-align: center;
    background-image: linear-gradient( navy,lavender);
    padding: 20px;
    margin: 0;
`


class LandingPage extends Component {

    render() {
        return (

     <Container>
         <LandingPageStyle>
                <Link to="/projects">
                
                    <img src={'./images/pivotallogo.png'}/>
                    
                <h1>PivotalPM </h1>
                </Link>
                </LandingPageStyle>
            </Container>
           
        );
    }
}

export default LandingPage;