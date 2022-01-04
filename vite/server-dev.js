/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')

const Koa = require('koa')
const koaConnect = require('koa-connect')

const vite = require('vite');

const root = process.cwd()
const resolve = (p) => path.resolve(__dirname, p)

;(async () => {
  const app = new Koa()

  const viteServer = await vite.createServer({
    root,
    logLevel: 'error',
    server: {
      middlewareMode: true,
    },
  })
  app.use(koaConnect(viteServer.middlewares))

  app.use(async ctx => {
    try {
      let template = fs.readFileSync(resolve('index.html'), 'utf-8')
      template = await viteServer.transformIndexHtml(ctx.path, template)
      const { render } = await viteServer.ssrLoadModule('/src/entry-server.ts')

      const [appHtml] = await render(ctx, {})

      const html = template.replace('<!--app-html-->', appHtml)

      ctx.type = 'text/html'
      ctx.body = html
    } catch (e) {
      viteServer && viteServer.ssrFixStacktrace(e)
      console.log(e.stack)
      ctx.throw(500, e.stack)
    }
  })

  app.listen(3000, () => console.log('http://localhost:3000'))
})()
