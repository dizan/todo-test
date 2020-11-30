import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { AddTask } from './containers/AddTask';
import TaskList from './containers/TaskList';
import { TodosContext, TodoTask } from './types/global';
import { TaskDate } from './types/enums';
import { generateId } from './utils/util';

const ModuleWrapper = styled.section`
  background: white;
  max-width: 100%;
 
  #content {
    display:flex;
    height: 100%;
    background-color: #F2F2F2;
  }
  
  .column {
    flex-grow: 1; 
    width: 30%;
    padding: 30px;
  }
  
  .center {
    background-color: #C4C4C4;
  }
`;


export const ListContext = React.createContext<TodosContext>(null);

export function ListContextProvider({children}) {
    const [todos, setTodos] = useState<TodoTask[]>([]);
    const addTodo = (title, text, date) => {
        const id = generateId();
        const newTodos = [...todos];
        newTodos.push({id: id, title: title, text: text, isCompleted: false, date: date})

        setTodos(newTodos);
    };

    const closeTodo = (id: number) => {
        let newTodos = [...todos];
        newTodos = newTodos.filter((todo) => todo.id != id);

        setTodos(newTodos);
    };

    const completeTodo = (id: number) => {
        let newTodos = [...todos];
        let todo = newTodos.find(todo => todo.id === id);
        if (todo) {
            todo.isCompleted = !todo.isCompleted;
        }

        setTodos(newTodos);
    };

    const completeAll= (date: TaskDate) => {
        let newTodos = [...todos];

        newTodos.forEach(todo => {
            if(todo.date === date) {
                todo.isCompleted = true
            }
        });

        setTodos(newTodos);
    };

    const context: TodosContext = {
        todos: todos,
        addTodo,
        closeTodo: closeTodo,
        completeTodo: completeTodo,
        completeAll: completeAll
    };

    return (
        <ListContext.Provider value={context}>
            {children}
        </ListContext.Provider>
    );

}



function TodoContainer() {

    return (
        <ModuleWrapper>

            <main id="content">
                <section id="add-form" className="column">
                    <AddTask />
                </section>

                <section id="today-list" className="column center">
                    <TaskList title="My today todo" date={TaskDate.TODAY}/>
                </section>

                <section id="tomorrow-list" className="column">
                    <TaskList title="My tomorrow todo"  date={TaskDate.TOMORROW}/>
                </section>


            </main>

        </ModuleWrapper>
    );
}

const Todo = () => (
    <>
        <GlobalStyle />
        <ListContextProvider>
            <TodoContainer />
        </ListContextProvider>
    </>
);

export default Todo;
