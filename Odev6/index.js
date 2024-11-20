const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.type = "html";
  ctx.body = "<h2>INDEX SAYFASI</h2>";
});

router.get("/about", (ctx) => {
  ctx.status = 200;
  ctx.type = "html";
  ctx.body = "<h2>HAKKIMDA SAYFASI</h2>";
});

router.get("/contact", (ctx) => {
  ctx.status = 200;
  ctx.type = "html";
  ctx.body = "<h2>ILETISIM SAYFASI</h2>";
});

app.use(async (ctx, next) => {
  await next();
  if (ctx.status === 404) {
    ctx.status = 404;
    ctx.type = "html";
    ctx.body = "<h2>404 SAYFA BULUNAMADI</h2>";
  }
});

app.use(router.routes()).use(router.allowedMethods());

const port = 5000;
app.listen(port, () => {
  console.log(`Sunucu port ${port} üzerinde çalışıyor.`);
});