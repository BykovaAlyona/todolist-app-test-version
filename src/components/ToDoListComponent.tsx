import * as React from 'react';
import TaskItem from './TaskItemComponent';
import Filter from './FilterComponent';
import AddTask from './AddTaskComponent';

function ToDoListComponent() {
  return (
    <div className="ToDoList">
      <AddTask/>
      <Filter/>
      <hr />
      <TaskItem />
    </div >
  )
}

export default ToDoListComponent;