import { initializeDatabase } from '../database/config'
import { v4 as uuidv4 } from 'uuid'

// Función para insertar un registro en la tabla 'task'
export const insertTask = (task: { title: string; description?: string }) => {
    const db = initializeDatabase()

    const insertQuery = `
        INSERT INTO task (id, title, description)
        VALUES (?, ?, ?)
    `

    const id = uuidv4()

    const stmt = db.prepare(insertQuery)
    stmt.run(id, task.title, task.description)

    return { message: 'Tarea registrada correctamente' }
}

export const getTask = (op: string) => {
    try {
        const db = initializeDatabase()

        let selectQuery = 'SELECT id, title, description, status FROM task'
        const conditions: string[] = []

        if (op === 'p') {
            conditions.push("status = 'in_progress'")
        }
        if (op === 'c') {
            conditions.push("status = 'completed'")
        }
        if (op === 'd') {
            conditions.push("status = 'disabled'")
        }

        // Añadir condiciones a la consulta si existen
        if (conditions.length > 0) {
            selectQuery += ' WHERE ' + conditions.join(' OR ')
        }

        const stmt = db.prepare(selectQuery)
        const rows = stmt.all()

        return rows
    } catch (error) {
        console.error('Error fetching tasks:', error)
        return []
    }
}

export const getTaskOne = (id: string) => {
    try {
        const db = initializeDatabase()
        const id_ = id
        const selectQuery = 'SELECT * FROM task WHERE id = ?'
        const stmt = db.prepare(selectQuery)
        const row = stmt.get(id_)

        return row
    } catch (error) {
        console.log(`Ocurrio un error ${error}`)
        return []
    }
}
