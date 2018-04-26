const api = require('./api')
const config = require('../next.config.js')
const routes = config.routes

const handleApi = async ctx => {
  const params = Object.assign({}, ctx.params, ctx.query)

  if (params.id) {
    ctx.body = await api.getItem(params.id)
  } else {
    ctx.body = await api.getList()
  }

  if (!Object.keys(ctx.body).length) {
    ctx.res.statusCode = 404
  }
}

const handleIndexPage = async (app, ctx) => {
  const params = Object.assign({}, ctx.params, ctx.query)
  ctx.res.statusCode = 200
  await app.render(ctx.req, ctx.res, routes.indexPage.renderPath, params)
}

const handleJobPage = async (app, ctx, nextStep) => {
  const params = Object.assign({}, ctx.params, ctx.query)
  const jobData = await api.getItem(params.id)

  if (!Object.keys(jobData).length) {
    ctx.res.statusCode = 404
    await nextStep()
  }

  Object.assign(params, {})
  ctx.res.statusCode = 200
  await app.render(ctx.req, ctx.res, routes.jobPage.renderPath, params)
}

module.exports = {
  api: handleApi,
  indexPage: handleIndexPage,
  jobPage: handleJobPage
}
