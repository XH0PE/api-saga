import { Router } from 'express'
import { getAprendices, createAprendices, updateAprendiz, deleteAprendiz, getAprendiz } from '../controllers/aprendiz.controller.js'

const router = Router() 

router.get('/apr', getAprendices)
router.get('/apr/:id', getAprendiz)
router.delete('/apr/:id', deleteAprendiz)
router.put('/apr/:id', updateAprendiz)
router.post('/apr', createAprendices)


export default router