import React, { Component } from 'react';

class AddProjectForm extends Component {

    render() {
        return (
            <div>
                <button 
                    onClick={this.props.toggleAddProjectForm}>
                    { 
                        this.props.formVisible 
                        ? 'Close -' 
                        : 'Create New Project +'
                    }
                </button>
                {
                    this.props.formVisible && 
                    <form onSubmit={this.props.handleSubmit}>
                    <br/>
                        <div>
                            <input 
                                type="text"
                                placeholder=" TITLE"
                                name="projectname"
                                value={this.props.project.projectname || ''}
                                onChange={this.props.handleChange}
                            />
                        </div>
                        <br/>
                        <div>
                            <textarea 
                                type="text"
                                placeholder=" DESCRIPTION"
                                value={this.props.project.description || ''}
                                onChange={this.props.handleChange}
                                name="description"
                            />
                        </div>
                        <button>Submit</button>
                    </form>
                }
            </div>
        );
    }
}

export default AddProjectForm;
