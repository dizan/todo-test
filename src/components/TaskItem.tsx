import React, { useContext } from 'react';
import styled from 'styled-components';
import TaskState from './controls/TaskState';
import { TaskDate } from '../types/enums';
import CloseButton from './controls/CloseButton';

export interface TaskItemProps {
    id: number;
    date: TaskDate;
    title: string;
    text: string;
    isCompleted: boolean;
    className: string;
    onClose(id: number): void;
    onComplete(id: number): void;
}


const TaskItemWrapper = styled.section`
  background-color:  #F8F8F8;
  padding: 24px 16px;
  font-size: 14px;
  line-height: 16px;
  border-radius: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  .title{
    font-weight: bold;
    float: left;
  }
  
  .state {
    float: right;
  }
  
  .close {
    float: right;
    margin-left: 5px;
  }
  
  header {
    line-height: 21px;
    height: 21px;
    margin-bottom: 20px;
  }
  
  .content{
    margin-bottom: 20px;
    word-break: break-all;
  }
`;


function TaskItem({id, date, isCompleted, text,title, className, onClose, onComplete}: TaskItemProps) {
    return (
        <TaskItemWrapper className={className}>
            <header>
                <span className="title">
                    {title}
                </span>

                <CloseButton className="close" onClose={onClose}/>
                <TaskState className="state" onSelect={onComplete} selected={isCompleted}/>
            </header>

            <p className="content">
                    {text}
            </p>


        </TaskItemWrapper>
    );
}

export default TaskItem;