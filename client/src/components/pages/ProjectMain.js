import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router'
import { Col } from 'reactstrap';
import Sidebar from '../commons/Sidebar'
import AddProjectForm from '../Projects/AddProjectForm';
import AllProjects from '../Projects/AllProjects';

const ProjectStyles = {
    color: 'white'
}

class ProjectMain extends Component {
    state = {
        projects: [{}],
        formVisible: false,
        project: {}
    }

    componentDidMount() {
        this.getAllProjects()
    }

    getAllProjects = () => {
        axios.get(`/api/projects`)
        .then((res) => this.setState({ projects: res.data }))
    }

    toggleAddProjectForm = () => {
        this.setState({ formVisible: !this.state.formVisible })
    }

    deleteProject = (projectId) => {
        axios.delete(`/api/projects/${projectId}`)
        .then((res) => this.getAllProjects());
    }

    handleChange = (event) => {
        const newState = { ...this.state.project }
        newState[event.target.name] = event.target.value
        this.setState({ project: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const payload = this.state.project;
        
        axios.post('/api/projects', payload)
        .then((res) => {
            this.getAllProjects()
        })
    }

    render() {
        return (
            <React.Fragment>
                <Col xs="3">
                <Sidebar>
                    <h1 style={ProjectStyles}>Projects</h1>
                    <AddProjectForm 
                        toggleAddProjectForm={this.toggleAddProjectForm}
                        formVisible={this.state.formVisible}
                        project={this.state.project}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </Sidebar>
                </Col>
                <Col xs="9">
                    <AllProjects 
                        projects={this.state.projects}
                        deleteProject={this.deleteProject}
                    />
                </Col>
            </React.Fragment>
        );
    }
}

export default withRouter(ProjectMain);  