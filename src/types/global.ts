import { TaskDate } from './enums';


export interface StyledComponentsProps {
    className?: string;
}



export interface TodosContext {
    todos: TodoTask[];
    closeTodo(id: number): void;
    completeTodo(id: number): void;
    completeAll(date: TaskDate): void;
    addTodo(title, text, date): void;
}


export interface TodoTask {
    id?: number;
    isCompleted: boolean;
    text: string;
    date: TaskDate;
    title: string;

}