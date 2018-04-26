module.exports = {
  useFileSystemPublicRoutes: false,
  port: 3333,
  routes: {
    api: { route: '/job-data' },
    indexPage: { renderPath: '/index', route: '/' },
    jobPage: { renderPath: '/job', route: '/job', routeWithParam: '/job/:id' }
  }
}
