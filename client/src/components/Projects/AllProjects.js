import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { 
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    Button, 
    Container, 
    Row,
    Col
} from 'reactstrap';

class AllProjects extends Component {
    render() {
        return (
            <Container>
                { 
                    this.props.projects && 
                    this.props.projects.length > 0 &&
                    <Row>
                        {
                            this.props.projects.map((project) => {
                                return(
                                    <Col xs="3">
                                        <Card style={{ marginBottom: '12px' }}>
                                            <CardBody>
                                                <CardTitle>{project.projectname}</CardTitle>
                                                <CardText>{project.description}</CardText>
                                                <Link to={`/projects/${project._id}`}>
                                                    <Button>View Project</Button>
                                                </Link> 
                                                <Link to={`/projects/`}>
                                                <Button onClick={() => this.props.deleteProject(project._id)}><img src={'../images/deletetaskicon.png'} height='15px' weight='15px'/></Button>
                                                </Link>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                }
            </Container>
        );
    }
}

export default AllProjects;
