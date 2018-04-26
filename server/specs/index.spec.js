/* global jasmine, describe, it, expect, beforeAll, afterAll */

import cheerio from 'cheerio'
import getPort from 'get-port'
import supertest from 'supertest'
import { jobList, jobDescriptions } from '../dataMock'
import { killApp, startServer } from './utils'
import config from '../../next.config'

const routes = config.routes

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 20

let server
let request

beforeAll(async () => {
  try {
    let port = await getPort()
    server = await startServer(port)
    request = supertest(`http://localhost:${port}`)
  } catch (e) {
    console.log('don\'t create another server for tests')
  }
})

afterAll(() => killApp(server))

describe('server', () => {
  let expectByJest = expect

  describe('api', () => {
    it('should return list of jobs on request with no params', (done) => {
      request
        .get(routes.api.route)
        .expect('Content-Type', /json/)
        .expect(200, jobList, done)
    })
    it('should return a job description on valid param', (done) => {
      const i = 1
      request
        .get(`${routes.api.route}?id=${i}`)
        .expect('Content-Type', /json/)
        .expect(200, jobDescriptions[i], done)
    })
    it('should return 404 if param is out of range', (done) => {
      const i = 13
      request
        .get(`${routes.api.route}?id=${i}`)
        .expect('Content-Type', /json/)
        .expect(404, {}, done)
    })
    it('should return 404 on invalid param', (done) => {
      const i = NaN
      request
        .get(`${routes.api.route}?id=${i}`)
        .expect('Content-Type', /json/)
        .expect(404, {}, done)
    })
  })

  describe('pages', () => {
    describe('index page', () => {
      it('renders right content type', (done) => {
        request
          .get(`${routes.indexPage.route}`)
          .expect(200)
          .expect('Content-Type', 'text/html; charset=utf-8')
          .end(done)
      })
      it('renders Next application', (done) => {
        request
          .get(`${routes.indexPage.route}`)
          .expect('Content-Type', 'text/html; charset=utf-8')
          .expect(200)
          .expect((res) => {
            const $ = cheerio.load(res.text)
            const nextApp = $('#__next').html()
            expectByJest(nextApp).toBeTruthy()
          })
          .end(done)
      })
      it('renders MUI theme styles', (done) => {
        request
          .get(`${routes.indexPage.route}`)
          .expect(200)
          .expect((res) => {
            const $ = cheerio.load(res.text)
            const renderedStyles = $('#jss-server-side').html()
            expectByJest(renderedStyles).toBeTruthy()
          })
          .end(done)
      })
    })

    describe('job page', () => {
      describe('should render properly if id param is valid', () => {
        const i = 1

        it('renders right content type', (done) => {
          request
            .get(`${routes.jobPage.route}?id=${i}`)
            .expect(200)
            .expect('Content-Type', 'text/html; charset=utf-8')
            .end(done)
        })
        it('renders Next application', (done) => {
          request
            .get(`${routes.jobPage.route}?id=${i}`)
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200)
            .expect((res) => {
              const $ = cheerio.load(res.text)
              const nextApp = $('#__next').html()
              expectByJest(nextApp).toBeTruthy()
            })
            .end(done)
        })
        it('renders MUI theme styles', (done) => {
          request
            .get(`${routes.jobPage.route}?id=${i}`)
            .expect(200)
            .expect((res) => {
              const $ = cheerio.load(res.text)
              const renderedStyles = $('#jss-server-side').html()
              expectByJest(renderedStyles).toBeTruthy()
            })
            .end(done)
        })
      })

      it('should return 404 if id is invalid param', (done) => {
        const i = +Infinity
        request
          .get(`${routes.jobPage.route}?id=${i}`)
          .expect(404)
          .expect('Content-Type', 'text/html; charset=utf-8')
          .end(done)
      })

      it('should return 404 if no param provided', (done) => {
        request
          .get(`${routes.jobPage.route}`)
          .expect(404)
          .expect('Content-Type', 'text/html; charset=utf-8')
          .end(done)
      })

      it('should return 404 if id param is out of range', (done) => {
        const i = 100
        request
          .get(`${routes.jobPage.route}?id=${i}`)
          .expect(404)
          .expect('Content-Type', 'text/html; charset=utf-8')
          .end(done)
      })
    })
  })
})
