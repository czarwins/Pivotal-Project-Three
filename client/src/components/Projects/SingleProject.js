import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { 
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    Button, 
    Col
} from 'reactstrap';

class SingleProject extends Component {

    render() {
        return (
            <React.Fragment>
               
                {   
                    this.props.editFormVisible &&
               
                    <form onSubmit={this.props.handleSubmit}>
                        <br/>
                        <div>
                            <input 
                                type="text"
                                placeholder=" TITLE"
                                name="title"
                                value={this.props.task.title || ''}
                                onChange={this.props.handleChange}
                            />
                        </div>
                        <br/>
                        <div>
                            <textarea 
                                type="text"
                                placeholder=" DESCRIPTION"
                                value={this.props.task.description || ''}
                                onChange={this.props.handleChange}
                                name="description"
                            />
                        </div>
                        <button>Submit</button>
                    </form>
                
                }
                <br/>
                <Col xs="9">
                {
                    this.props.tasks &&
                    this.props.tasks.map((task) => {
                        return (
                            <Card>
                                <CardBody>
                                <CardTitle>Title: {task.title}</CardTitle>
                                <CardText>Description: {task.description}</CardText>
                                <Link to={`/projects/:projectId`}></Link>
                                <Button onClick={this.props.deleteTask}><img src={'../images/deletetaskicon.png'} height='15px' weight='15px'/></Button>
                                </CardBody>
                            </Card>
                        );
                    })
                }
                </Col>
            </React.Fragment>
        );
    }
}

export default withRouter(SingleProject);
