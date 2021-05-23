Puppeteer notes
===============

* Youtube tutorial for this - [Tutorial | Getting started with puppeteer | Manoj Singh Negi | NodeJS](https://youtu.be/KowSdMQTJeo)

* Official repo for Puppeteer [https://github.com/puppeteer/puppeteer](https://github.com/puppeteer/puppeteer)
* Official Puppeteer docs [https://pptr.dev/](https://pptr.dev/)

Methods used in above example
===

* [puppeteer.launch([options])](https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#puppeteerlaunchoptions)
* [puppeteer.newPage()](https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#browsernewpage)
* [page.setViewport(viewport)](https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#pagesetviewportviewport)
* [page.goto(url[, options])](https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#pagegotourl-options)
* [page.type(selector, text[, options])](https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#pagetypeselector-text-options)
* [page.$(selector)](https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#pageselector)
* [page.waitForNavigation([options])](https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#pagewaitfornavigationoptions)
* [page.click(selector[, options])](https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#pageclickselector-options)
* [page.screenshot([options])](https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#pagescreenshotoptions)
* [browser.close()](https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#browserclose)

Issues I ran into
=====

* WaitForNavigation racing condition when click is involved in changing the navigation - [https://github.com/puppeteer/puppeteer/issues/3338#issuecomment-426590440](https://github.com/puppeteer/puppeteer/issues/3338#issuecomment-426590440)
