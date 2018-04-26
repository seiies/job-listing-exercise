# Job listing exercise

This is the basic example of the web app which displays job postings. It uses [Next.js](https://github.com/zeit/next.js) and based on symbiosis of [with-redux](https://github.com/zeit/next.js/tree/master/examples/with-redux), [with-material-ui-next](https://github.com/mui-org/material-ui/tree/v1-beta/examples/nextjs) and [custom-server-koa](https://github.com/zeit/next.js/tree/master/examples/custom-server-koa) examples. More of that code is covered with tests, linted and organised for better scalability.

For testing [Jest](https://facebook.github.io/jest/) is used. It ties up with React very well and provides excellent auto-mocking functionality.

Code is linted with [Standard](https://www.npmjs.com/package/standard). It uses pretty modern and balanced approach to code styling, has awesome auto-formatter and very well documented.

[Koa](http://koajs.com/) is used as a server. It is nifty and minimalistic successor of Express, has a bit different approach to middleware usage, uses generators and promise-based control flow. A lot of the Express goodies were moved to the middleware level in Koa, which is great for robust custom applications, but not that convenient for common usage. [Middleware ecosystem](https://github.com/koajs/koa/wiki) isn't that well structured and sometimes have questionable quality.

UI library of choice is [Material-UI](https://material-ui-next.com/). It implements part of Google's Material Design specification. Under the hood it uses [JSS](https://github.com/cssinjs/jss), which I find not really convenient and natural to use. So, for application styling I utilize basic usage of [styled-jsx](https://github.com/zeit/styled-jsx), which goes by default with Next.js. But here is a place for improvements.

## How to use

To start demo:

```bash
npm start
```

This builds an application and runs it in production mode on http://localhost:3333.

To start playing with code:

```bash
npm install
npm run dev
```

Development mode involves Hot Module Replacement and plugs Redux DevTools

To run tests:

```bash
npm test
```

To run linter:

```bash
npm run lint
```

## Further improvements
* Better error handling
* SSR caching
* Database interoperability
* More mature server-side structure
* TLS/SSL support
* Use immutable data structures in store
* Better redux tooling
* Better test coverage of boilerpate code
* Better styling architecture
