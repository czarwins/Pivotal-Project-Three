import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router'
import { Col } from 'reactstrap';
import Sidebar from '../commons/Sidebar'
import SingleProject from '../Projects/SingleProject';
import { Link } from 'react-router-dom';

const buttonStyle = {
    display: 'block',
    marginBottom: '12px'
};

const projectHeaderStyle = {
    marginBottom: '24px',
    color: 'white'
}


class ProjectDetails extends Component {
    state = {
        project: {},
        task: {},
        editFormVisible: false
    }

    componentDidMount() {
        this.getSingleProject()
    }

    getSingleProject = () => {
        const projectId = this.props.match.params.projectId
        axios.get(`/api/projects/${projectId}`)
            .then((res) => {
                this.setState({ project: res.data })
            })
    }

    deleteProject = () => {
        const projectId = this.props.match.params.projectId
        axios.delete(`/api/projects/${projectId}`)
            .then(() => this.props.history.goBack())
    }

    toggleEditProjectForm = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
    }
    handleEditChange = (event) => {
        const newState = { ...this.state.project }
        newState[event.target.name] = event.target.value
        this.setState({ project: newState })
    }

    handleEditSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.project
        const projectId = this.props.projectId
        axios.patch(`/api/projects/${projectId}`, payload)
        .then((res) => {
            this.props.getSingleProject()
            this.props.toggleEditProjectForm()
        })
    }
    createNewTask = () => {
        // taskController Create route
        // update the state with the new tasks
        const projectId = this.props.match.params.projectId
        axios.post(
            `/api/projects/${projectId}/tasks`,
            {
               title: 'Sample Title',
               description:  'Sample description this is just here as a test'
            }
        ).then((res) => {
            console.log(res.data)
            this.getSingleProject()
        })
    }

    deleteTask = () => {
        // event.preventDefault()
        const taskId = this.props.match.params.taskId
        console.log(taskId)
        axios.delete(`/api/tasks/${taskId}`).then(() => {
            this.props.getSingleProject()
        })
    }

    handleChange = (event) => {
        const newState = { ...this.state.task }
        newState[event.target.name] = event.target.value
        this.setState({ task: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const payload = this.state.task;
        const projectId = this.props.match.params.projectId
        axios.post(`/api/projects/${projectId}/tasks`, payload)
        .then((res) => {
            this.getSingleProject()
        })
    }

    render() {
        return (
            <React.Fragment>
                <Col xs="3" >
                <Sidebar >
                    <h1 style={projectHeaderStyle}>Project: {this.state.project.projectname}</h1>
                    <Link to="/projects">
                        <button style={buttonStyle}>
                            Back
                        </button>
                    </Link>
                    <button 
                        style={buttonStyle}
                        onClick={this.toggleEditProjectForm}
                    >
                        Add Task +
                    </button>
                    <button 
                        style={buttonStyle}
                        onClick={this.toggleEditProjectForm}
                    >
                        Edit Project
                    </button>
                </Sidebar>
                </Col>
                <Col xs="9">
                    <SingleProject 
                        createNewTask={this.createNewTask}
                        // deleteTask={this.deleteTask}
                        deleteProject={this.deleteProject}
                        getSingleProject={this.getSingleProject}
                        editFormVisible={this.state.editFormVisible}
                        project={this.state.project}
                        tasks={this.state.project.tasks}
                        task={this.state.task}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </Col>
            </React.Fragment>
        );
    }
}

export default withRouter(ProjectDetails);  