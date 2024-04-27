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

  const updateEstudiantes = async (req, res) => {
    try {
        const { nombre, } = req.body
        const { rut} = req.params
        const updateEstudiantes = { rut, nombre, curso, nivel}
        const estudiantes = await estudiantesModel.updateEstudiantes()
        return res.json(estudiantes)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}



  

  const DeleteEstudiantes = async (req, res) => {
  
      try {
        const { rut } = req.params
        const estudiantes = await estudiantesModel.deleteOnByRut(rut)
        return res.json(todo)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
  
      }

  
export const estudiantesControllers  = {
    allEstudiantes, 
    uniqueEstudiantes, 
    updateEstudiantes,
    DeleteEstudiantes
}

