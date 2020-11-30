import React, { useContext } from 'react';
import TaskItem from '../components/TaskItem';
import styled from 'styled-components';
import { ListContext } from '../Todo';
import { TaskDate } from '../types/enums';
import Button from '../components/controls/Button';

export interface TaskListProps {
    title: string
    date: TaskDate;
}

const TaskListWrapper = styled.div`
  button {
    width: 100%;
  } 
`;

const WrappedTaskItem = styled(TaskItem)`
    margin-bottom:30px;
`;


export function TaskList({title, date}: TaskListProps) {
    const todoContext = useContext(ListContext);

    let closeHandle = (id: number) => {
        todoContext.closeTodo(id)
    };

    let completeTodoHandle = (id: number) => {
        todoContext.completeTodo(id)
    };

    let completeAll = () => {
        todoContext.completeAll(TaskDate.TODAY)
    };

    const getList = () => {
        return todoContext.todos.filter(todo => todo.date === date).map((todo) => {
            return <WrappedTaskItem onComplete={() => completeTodoHandle(todo.id) } onClose={() => closeHandle(todo.id) } className="" id={todo.id} date={todo.date} text={todo.text} isCompleted={todo.isCompleted} title={todo.title}/>
        })
    };

    // console.log(todoContext.addTodo());
    console.log("todos:", getList());

    return (
        <TaskListWrapper>
            <header>
                <h1>
                    {title}
                </h1>
            </header>

            <div>
                {/*<WrappedTaskItem className="" id={123} date={TaskDate.TODAY} text={"123"} isCompleted={false} title={"title"}/>*/}
                {/*<WrappedTaskItem className=""  id={123} date={TaskDate.TODAY} text={"123"} isCompleted={true} title={"title"}/>*/}
                {/*<WrappedTaskItem className="" id={123} date={TaskDate.TODAY} text={"123"} isCompleted={false} title={"title"}/>*/}
                {/*<WrappedTaskItem className="" id={123} date={TaskDate.TODAY} text={"123"} isCompleted={true} title={"title"}/>*/}

                {getList()}
            </div>

            {date === TaskDate.TODAY  ? <Button onClick={completeAll}>Select all complete</Button> : null}
        </TaskListWrapper>
    );
}

export default TaskList;