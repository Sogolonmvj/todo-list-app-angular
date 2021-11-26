export interface Task {
    id: number;
    title: string;
    description: string;
    done: boolean;
};

export class TaskModel {
    id: number = 0;
    title: string = '';
    description: string = '';
    done: boolean = false;
};