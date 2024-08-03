import Database from 'better-sqlite3'
// import Sqlite from 'better-sqlite3'
import path from 'path'

// Función para inicializar la base de datos
export const initializeDatabase = (): Database => {
    const dbPath = path.join(__dirname, '..', '..', 'resource', 'database', 'db_task.db')

    // Crear o abrir la base de datos local
    const db = new Database(dbPath, { verbose: console.log })

    // Crear la tabla 'task' si no existe
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS task (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            status ENUM('in_progress', 'disabled', 'completed') DEFAULT 'in_progress',
            completed_at TIMESTAMP NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            updated_at TEXT DEFAULT CURRENT_TIMESTAMP
        );
    `

    db.exec(createTableQuery)

    console.log('Base de datos y tabla "task" creadas o abiertas exitosamente.')

    // Devolver la instancia de la base de datos para uso posterior
    return db
}


