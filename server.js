const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const logger = require('koa-logger')
const jsonFilter = require('koa-json')
const handlers = require('./server/handlers')
const config = require('./next.config')
const routes = config.routes

const port = parseInt(process.env.PORT, 10) || config.port
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handleIndexPage = handlers.indexPage.bind(null, app)
const handleJobPage = handlers.jobPage.bind(null, app)
const handleOtherRoutes = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = new Koa()
    const router = new Router()

    router.get(routes.api.route, handlers.api)
    router.get(routes.jobPage.routeWithParam, handleJobPage)
    router.get(routes.jobPage.route, handleJobPage)
    router.get(routes.indexPage.route, handleIndexPage)

    router.get('*', async ctx => {
      await handleOtherRoutes(ctx.req, ctx.res)
    })

    server.use(logger())
    server.use(jsonFilter())
    server.use(router.routes())

    server.listen(port, () => {
      console.log(`> Koa Ready on http://localhost:${port}`)
    })
  })
