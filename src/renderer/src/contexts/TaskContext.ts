import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

// Define el tipo del contexto
interface TasksContextType {
    selectedTask: number | null;
    setSelectedTask: Dispatch<SetStateAction<number | null>>;
}

// Inicializar el contexto con un valor predeterminado
export const TasksContext = createContext<TasksContextType>({
    selectedTask: null,
    setSelectedTask: () => {} // Función de no-op como placeholder
});

interface Props {
    children: React.ReactNode;
}

export const TasksProvider = ({ children }: Props) => {
    const [selectedTask, setSelectedTask] = useState<number | null>(null);

    return (
        <TasksContext.Provider
            value={{
                selectedTask,
                setSelectedTask
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};
