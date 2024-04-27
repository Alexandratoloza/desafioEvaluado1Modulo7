 import { Router} from "express";
import { estudiantesControllers } from "../controllers/estudiantes.controllers.js";

 const router = Router()

router.get('/', estudiantesControllers.allEstudiantes)

/// necesito un estudiante consulta base de datos
router.get('/:rut', estudiantesControllers.uniqueEstudiantes)

router.put('/:rut', estudiantesControllers.updateEstudiantes)
router.delete('/:rut', estudiantesControllers.DeleteEstudiantes)


 export default router;