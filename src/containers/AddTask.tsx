import React, { useContext, useState } from 'react';
import Button from '../components/controls/Button';
import styled from 'styled-components';
import { ListContext } from '../Todo';
import { TaskDate } from '../types/enums';


const AddTaskWrapper = styled.div`

`;


export function AddTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(TaskDate.TODAY);

    const todoContext = useContext(ListContext);


    function handleSubmit(e) {
        e.preventDefault();
        todoContext.addTodo(title, description, date);
        console.log("Ura!", e)
    }

    return (
        <AddTaskWrapper>
            <header>
                <h1>
                    Add new One
                </h1>
            </header>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                           placeholder="title"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           required />

                    <textarea
                        cols={30}
                        rows={10}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="description"/>

                    <select value={date} onChange={(e) => setDate(e.target.value as TaskDate)} placeholder="today">
                        <option value={TaskDate.TODAY}>Today</option>
                        <option value={TaskDate.TOMORROW}>Tomorrow</option>
                    </select>

                    <Button onClick={handleSubmit}>Add</Button>
                </form>


            </div>

        </AddTaskWrapper>
    );
}