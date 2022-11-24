import * as React from 'react';
import { changeList } from '../store/';

function FilterComponent() {
    const optionfilter =
        changeList.filterList.map((item) =>
            <option key={item.val} value={item.val}>
                {item.title}
            </option>
        );
    changeList.getList();
    return (
        <div className="list-filter">
            <select id="filter"
                onChange={(filter) => {
                    changeList.selectedFilter = filter.target.value;
                    changeList.getList();
                }}>
                {optionfilter}
            </select >
        </div >
    )
}

export default FilterComponent;