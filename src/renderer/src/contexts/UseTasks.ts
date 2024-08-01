import { useContext } from "react";
import { TasksContext } from "./TaskContext"

export const useTask = () => {
    const context = useContext(TasksContext);
    if (!context)
        throw new Error("useTask must be used within a TaskProvider");

    return context;
};