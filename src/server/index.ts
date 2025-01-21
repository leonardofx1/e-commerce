
import Fastify from 'fastify'
import { userRoutes } from '../routes/user'
const app = Fastify({
  logger: true
})
app.register(userRoutes )

try {
    await app.listen({port:3000})
    console.log(3000)
} catch (error) {
    console.log('error server : ', error)
    process.exit(1)
}

