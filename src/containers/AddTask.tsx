import React, { useState } from 'react';
import Button from '../components/controls/Button';
import styled from 'styled-components';


const AddTaskWrapper = styled.div`

`;


export function AddTask() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
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

                    <select name="dasd" id="asda" placeholder="today">
                        <option value="">Today</option>
                        <option value="">Tomorrow</option>
                    </select>

                    <Button type="submit">Add</Button>
                </form>


            </div>

        </AddTaskWrapper>
    );
}