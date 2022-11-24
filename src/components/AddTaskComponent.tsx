import * as React from 'react';
import { ReactComponent as Plus } from "../svg/plus.svg";
import { observer } from 'mobx-react';
import { changeList } from '../store/';

function AddTaskComponent() {
    return (
        <div className="add-task">
            <input type="text" placeholder="Add new task" />
            <button className="button-svg">
                <Plus />
            </button>
        </div>
    )
}

export default AddTaskComponent;