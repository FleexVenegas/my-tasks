import { useContext } from "react";
import { TasksContext } from './TaskContext'

export const useTasks = () => {
    const context = useContext(TasksContext);
    if (!context)
        throw new Error("useTask must be used within a TaskProvider");

    return context;
};