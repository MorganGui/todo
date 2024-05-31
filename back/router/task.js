import Router from 'express'
import { getAll, getById, add, update, del } from '../controllers/task.js'

const router = Router()

router.get('/', getAll)
router.get('/:id', getById)

router.post('/', add)
router.put('/:id', update)
router.delete('/:id', del)

export default router
