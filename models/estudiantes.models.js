
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



export const estudiantesModel =  {
    findAll, findOneByRut

}