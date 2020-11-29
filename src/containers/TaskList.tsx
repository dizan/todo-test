import React, { useContext } from 'react';
import TaskItem from '../components/TaskItem';
import { TaskDate } from '../types/enums';
import styled from 'styled-components';
import { ListContext } from '../Todo';

export interface TaskListProps {
    // completed: boolean;
}

const TaskListWrapper = styled.div`
  
`;

const WrappedTaskItem = styled(TaskItem)`
    margin-bottom:30px;
`

export function TaskList({}: TaskListProps) {
    const todoContext = useContext(ListContext);

    function getList() {
        return todoContext.todos.map((todo) => {
            <WrappedTaskItem id={todo.id} date={todo.date} text={todo.text} isCompleted={todo.isCompleted} title={todo.title}/>
        })
    }

    return (
        <TaskListWrapper>
            <header>
                <h1>
                    My today todo
                </h1>
            </header>

            <div>
                {
                    getList()
                }
            </div>
        </TaskListWrapper>
    );
}

export default TaskList;