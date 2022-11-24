import React from 'react';
import { ReactComponent as Checked } from "../svg/checked.svg";
import { ReactComponent as GarbageBin } from "../svg/garbage-bin.svg";
import { observer } from 'mobx-react';
import { changeList } from '../store/';

function TaskItemComponent() {
    const taskList =
        changeList.list.map(item => {
            return <li key={item.id}>
                <input type="checkbox" name="listtasks"
                    id={"checkbox" + item.id} defaultChecked={item.completed} />
                <label htmlFor={"checkbox" + item.id}>
                    <Checked /><span>{item.title}</span>
                </label>
                <button><GarbageBin /></button>
            </li>
        });

    return (
        <ul className="list">
            {taskList}
        </ul>
    )
}

export default observer(TaskItemComponent);