 import { Router} from "express";
import { estudiantesControllers } from "../controllers/estudiantes.controllers.js";

 const router = Router()

router.get('/', estudiantesControllers.allEstudiantes)

router.get('/:rut', estudiantesControllers.uniqueEstudiantes)
router.post('/', estudiantesControllers.createEstudiantes)
router.put('/', estudiantesControllers.updateEstudiantes)
router.delete('/', estudiantesControllers.DeleteEstudiantes)


 export default router;