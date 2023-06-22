
import {Router} from 'express'

type User = {
    id: string,
    name: string,
}

const router = Router()

router.get('/', (req, res) => {
    res.send('hola mundo')
})

router.post('/', (req, res) => {
    const { name } = req.body as User
    console.log(name)
    res.send('ok')
})

export default router