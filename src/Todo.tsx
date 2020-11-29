import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { AddTask } from './containers/AddTask';
import TaskList from './containers/TaskList';
import { TodosContext } from './types/global';
import { TaskDate } from './types/enums';
import { generateId } from './utils/util';

const ModuleWrapper = styled.section`
  background: white;
  max-width: 100%;
  height: 100%;
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

//
// export const context: TodosContext = {
//     todos: [
//         {
//             id:1,
//             title: "test",
//             text: "text",
//             date: TaskDate.TODAY,
//             isCompleted: false
//         }
//     ],
//     addTodo: ( title: string, text: string, date: TaskDate) => {
//         this?.todos?.push(
//             {id: generateId(), title: title, text: text, date: date, isCompleted: false}
//         );
//     }
// };



// export const ListContext = React.createContext<TodosContext>(context);

function TodoContainer() {

    return (
        <ModuleWrapper>

            <main id="content">
                <section id="add-form" className="column">
                    <AddTask/>
                </section>

                <section id="today-list" className="column center">
                    <TaskList/>
                </section>

                <section id="tomorrow-list" className="column">
                    <TaskList/>
                </section>


            </main>

        </ModuleWrapper>
    );
}

const Todo = () => (
    <>
        <GlobalStyle />
            {/*<ListContext.Provider value={context}>*/}
                <TodoContainer />
            {/*</ListContext.Provider>*/}
    </>
);

export default Todo;
