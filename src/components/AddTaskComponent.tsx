import * as React from 'react';
import { ReactComponent as Plus } from "../svg/plus.svg";
import { observer } from 'mobx-react';
import { changeList } from '../store/';

function AddTaskComponent() {
    return (
        <div className="add-task">
            <input type="text" placeholder="Добавить задачу..." id="tasktitle" name="tasktitle"
            value={changeList.addtasktitle}
                onChange={({target}) => changeList.addtaskOnChange(target.value)} />
            <button className="button-svg" onClick={() => changeList.addItem()}>
                <Plus />
            </button>
        </div>
    )
}

export default observer(AddTaskComponent);