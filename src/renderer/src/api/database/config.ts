import Database, { Database as SqliteDatabase } from 'better-sqlite3'
// import Sqlite from 'better-sqlite3'
import path from 'path'

// Mantener una instancia de la base de datos
let dbInstance: SqliteDatabase | null = null

// Función para inicializar la base de datos
export const initializeDatabase = (): SqliteDatabase => {
    if (dbInstance) {
        console.log(dbInstance)
        return dbInstance
    }

    const dbPath = path.join(__dirname, '..', '..', 'resources', 'database', 'db_task.db')

    // Crear o abrir la base de datos local
    dbInstance = new Database(dbPath, { verbose: console.log })

    // Crear la tabla 'task' si no existe
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS task (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        status TEXT CHECK(status IN ('in_progress', 'disabled', 'completed')) DEFAULT 'in_progress',
        completed_at TIMESTAMP NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    `

    dbInstance.exec(createTableQuery)

    // Devolver la instancia de la base de datos para uso posterior
    return dbInstance
}

// Función para cerrar la base de datos al finalizar
export const closeDatabase = () => {
    if (dbInstance) {
        dbInstance.close()
        dbInstance = null
    }
}
