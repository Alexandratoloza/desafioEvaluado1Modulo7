import { estudiantesModel } from "../models/estudiantes.models.js"

const allEstudiantes =  async (req, res) => {

try{ 
  const estudiantes = await estudiantesModel.findAll()
  return res.json(estudiantes)

} catch (e) {
    console.log(e)
    return res.status(500).json({ok: false})
 }

}


const uniqueEstudiantes = async (req, res) => {
  
  try{
    const { rut } = req.params

    const estudiantes = await estudiantesModel.findOneByRut(rut)

    return res.json({estudiantes})

  }catch(e){ 
    console.log(e)
    return res.status(500).json({ok: false})

  }}

export const estudiantesControllers  = {
    allEstudiantes, uniqueEstudiantes
}


