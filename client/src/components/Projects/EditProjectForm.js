import React, { Component } from 'react';
import axios from 'axios'

class EditProjectForm extends Component {
    state = {
        project: {
            projectname: '',
            description: ''
        }
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

    render() {
        return (
            // null
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="projectname"
                        name="projectname"
                        value={this.state.project.projectname}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="description"
                        value={this.state.project.description}
                        onChange={this.handleChange}
                        name="description"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditProjectForm;