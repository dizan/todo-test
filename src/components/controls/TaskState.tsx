import React from 'react';
import stateSelected from '../../assets/images/state-selected.png'
import stateUnselected from '../../assets/images/state-unselected.png'
import styled from 'styled-components';

export interface TaskStateProps {
    selected: boolean;
    className: string;
    onSelect: void;
}

const TaskStateWrapper = styled.span`
  cursor:pointer;
`;

function TaskState({selected, className, onSelect}: TaskStateProps) {
    return (
        <TaskStateWrapper className={className} onClick={onSelect}>
            <img src={selected ? stateSelected : stateUnselected} alt="" />
        </TaskStateWrapper>
    );
}

export default TaskState;