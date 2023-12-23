import express, {Request, Response} from 'express' //req e res são tipos especificos do express e precisam ser importados
import { router } from './routes'


const server = express()
const port: number = 5000


server.use(express.json())//funcao nativa do express para que o servidor use e suporte json
server.use(router)



server.get("/", (request: Request, response: Response)=>{
    return response.status(200).json({ message: "Ta funfando krai"})
})


server.listen(port, () => {
    console.log(`rodando em http://localhost:${port}`)

})