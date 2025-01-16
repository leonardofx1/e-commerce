
import Fastify from 'fastify'
const app = Fastify({
  logger: true
})


try {
    await app.listen({port:3000})
    console.log(3000)
} catch (error) {
    console.log('error sewrver : ', error)
    process.exit(1)
}

