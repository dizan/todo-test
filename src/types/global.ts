import { TaskDate } from './enums';


export interface StyledComponentsProps {
    className?: string;
}



export interface TodosContext {
    todos: TodoTask[];
    // deleteTodo: (id: number) => {};
    // completeTodo: (id: number) => {};
    addTodo: (title: string, text: string, date: TaskDate) => void;
}


export interface TodoTask {
    id?: number;
    isCompleted: boolean;
    text: string;
    date: TaskDate;
    title: string;

}