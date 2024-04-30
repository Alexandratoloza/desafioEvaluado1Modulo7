import { handleError } from "../database/codeErrors.js"
import { estudiantesModel } from "../models/estudiantes.models.js"

const allEstudiantes = async (req, res) => {

  try {
    const estudiantes = await estudiantesModel.findAll()
    return res.json(estudiantes)

  } catch (e) {
    console.log(e)
    const { code, msg } = handleError(error)
    res.status(code).json({ ok: false, msg })
  }

}


const uniqueEstudiantes = async (req, res) => {

  try {
    const { rut } = req.params
    const estudiantes = await estudiantesModel.findOneByRut(rut)
    if (!estudiantes) return res.status(404).json({ ok: false, msg: "no se encontró" })
    return res.json({ estudiantes })

  } catch (error) {
    console.log(error)
    const { code, msg } = handleError(error)
    res.status(code).json({ ok: false, msg })
  }

}

const createEstudantes = async (req, res) => {

  try {

    const { rut, nombre, curso, nivel } = req.body

    if (!rut || !rut.trim()) {
      return res.status(400).json({ ok: false, msg: "Se necesita el campo rut" })
    }
    const nuevoEstudiante = { rut, nombre, curso, nivel }
    const estudiantesDB = await estudiantesModel.create(nuevoEstudiante)
    return res.status(201).json(estudiantesDB)


  } catch (error) {
    console.log(error)
    return res.json(500).json({ ok: false })
  }

}

const updateEstudiantes = async (req, res) => {
  try {
    const { nombre, } = req.body
    const { rut } = req.params
    const updateEstudiantes = { rut, nombre, curso, nivel }
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


export const estudiantesControllers = {
  allEstudiantes,
  uniqueEstudiantes,
  createEstudantes,
  updateEstudiantes,
  DeleteEstudiantes,
}

