
import { pool} from "../database/connection.js";

const findAll = async () => {
   const { rows } = await pool.query("SELECT * FROM ESTUDIANTES LIMIT 10")
    return rows
}

const findOneByRut = async (rut) =>{

const text = 'SELECT * FROM ESTUDIANTES WHERE RUT = $1'
const {rows} = await pool.query(text, [rut])
return rows[0]
}

const createEstudiantes = async ({ rut, nombre, curso, nivel }) => {
    const query = {
        text: 'INSERT INTO ESTUDIANTES VALUES ($1, $2, $3, $4) RETURNING *',
        values: [rut, nombre, curso, nivel],
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

 
const updateEstudiantes = async (updateEstudiantes) => {
    
    const SQLupdate = "UPDATE ESTUDIANTES SET NOMBRE = 'ESTUDIANTE 1 MODIFICADO' WHERE RUT = '111';"
    const { rows } = await pool.query(SQLupdate, [updateEstudiantes.nombre, updateEstudiantes.curso, updateEstudiantes.nivel])
    return rows
}



const DeleteEstudiantes = async (rut) => {

    const text = 'DELETE FROM ESTUDIANTES WHERE RUT = $1'
    const {rows} = await pool.query(text, [rut])
return rows[0]

}

export const estudiantesModel =  {
    findAll, findOneByRut, createEstudiantes, updateEstudiantes, DeleteEstudiantes, 

}