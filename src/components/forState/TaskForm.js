import React from 'react'

class TaskForm extends React.Component{

    constructor(){
        super()

        this.state ={
            inputData: ''}
    }


     handleSubmit = (event) => {
        //stopping the page reload
        event.preventDefault()
        console.log(event.target.value)
        console.log('in the handleSubmit function', this.state.inputData)

        //let the TaskContainer know and send data!
        this.props.onNewTask(this.state.inputData)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        console.log("in the input change")
        console.log(event.target.value)
        this.setState({inputData:event.target.value})

    }

    render(){
    return (
        <form>
            <input type='text' value={this.state.inputData} onChange={this.handleInputChange}/>
            <button onClick ={this.handleSubmit}>Submit!</button>
        </form>
    )
    }
}

export default TaskForm