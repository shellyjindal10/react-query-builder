import koa from 'koa'
import favicon from 'koa-favi'
import route from 'koa-route'
import log4js from 'log4js'

let app = koa()
let logger = log4js.getLogger()
app.use(route.get('/', index))

function *index() {
 this.body = "<h1>Badger</h1>"
}

app.listen(process.env.MIDDLEWARE_PORT).on(`listening`, () => {
  logger.info(`Middleware webservice listening on port ${process.env.MIDDLEWARE_PORT}`)
})
