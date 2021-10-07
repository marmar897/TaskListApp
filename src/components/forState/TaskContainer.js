import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import React from 'react'


class TaskContainter extends React.Component{
 constructor(){
     super()
     this.state = {tasks: []}
 }

 handleNewTask = (task) =>{
    console.log("child retured this data", task)
    let oldData = this.state.tasks
    console.log(oldData, [...oldData, task])
    this.setState({tasks: [...oldData, task]})
}

    render(){
    return (
        <div>
            <TaskForm onNewTask={this.handleNewTask}  />
            <TaskList data ={this.state.tasks}/>
        </div>
    )
    }
}
export default TaskContainter