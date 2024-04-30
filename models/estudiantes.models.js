
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

const updateEstudiantes = async (estudiantes) => {
    
    const SQLupdate = "UPDATE ESTUDIANTES SET NOMBRE = 'ESTUDIANTE 1 MODIFICADO' WHERE RUT = '111';"
    const { rows } = await pool.query(SQLupdate, [estudiantes.nombre, estudiantes.curso, estudiantes.nivel])
    return rows
}

const deleteOnByRut = async (rut) => {

    const text = 'DELETE FROM ESTUDIANTES WHERE RUT = $1'
    const {rows} = await pool.query(text, [rut])
return rows[0]

}

export const estudiantesModel =  {
    findAll, findOneByRut,  updateEstudiantes, deleteOnByRut, 

}