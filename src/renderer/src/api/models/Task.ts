import { initializeDatabase } from '../database/config'

// Función para insertar un registro en la tabla 'task'
export const insertTask = (task: {
    id: string
    title: string
    description?: string
    status?: string
}) => {
    const db = initializeDatabase()

    const insertQuery = `
        INSERT INTO task (id, title, description)
        VALUES (?, ?, ?)
    `

    const stmt = db.prepare(insertQuery)
    stmt.run(task.id, task.title, task.description)

    console.log('Registro insertado exitosamente.')

    db.close()
}

export const getTask = (op: string) => {
    try {
        const db = initializeDatabase()

        console.log(op)

        let selectQuery = 'SELECT id, title, description, status FROM task'
        const conditions: string[] = []

        if (op === 'p') {
            conditions.push('status = "in_progress"')
        }
        if (op === 'c') {
            conditions.push('status = "completed"')
        }
        if (op === 'd') {
            conditions.push('status = "disabled"')
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
