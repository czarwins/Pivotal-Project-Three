import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const TaskCard = styled.form`
    height: 200px;
    width: 200px;
    background-color: beige;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
        background-color: beige;
    }

    textarea {
        background-color: beige;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class Task extends Component {
    state = {
        task: {
            title: '',
            description: ''
        }
    }

    // handleChange = (event) => {
    //     const newState = {...this.state.comment}
    //     newState[event.target.name] = event.target.value
    //     this.setState({ comment: newState})
    // }
    handleChange = (event) => {
       
        const updatedState = { ...this.state.task }
        updatedState[event.target.name] = event.target.value
        this.setState({ task: updatedState })
    }

    handleSubmit = (event, taskId) => {
        event.preventDefault()
        const payload = this.state.task
        axios.patch(`/api/tasks/${taskId}`, payload)
        .then(() => this.props.getSingleProject)
    }

    deleteTask = (event, taskId) => {
        event.preventDefault()
        console.log(taskId)
        axios.delete(`/api/tasks/${taskId}`).then(() => {
            this.props.getSingleProject()
        })
    }

    render() {
        return (
            <FlexContainer>
                {this.props.project.tasks.map((task, i) => (
                        <TaskCard onBlur={(event) => this.handleSubmit(event, task._id)} key={i}>
                            <button onClick={(event)=> this.deleteTask(event, task._id)}><img src={'../images/deletetaskicon.png'} height='15px' weight='15px'/></button>
                            <div><input onChange={(event)=> this.handleChange(event, task._id)} type="text" name="title" value={task.title}></input></div>
                            <div><textarea onChange={(event)=> this.handleChange(event, task._id)} type="text" name="description" value={task.description}></textarea></div>
                        </TaskCard>
                    ))}        
            </FlexContainer>
        );
    }
}

export default Task;        