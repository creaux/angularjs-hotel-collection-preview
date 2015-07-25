About
=====

Preview application for serving hotel collection to client from mock.

Preview demo of development version is accessible on: http://hotel-collection-preview.herokuapp.com

Architecture
============

Application is not optimize for distribution run! It's just development preview of my personal approach.

Application is presenting not only presentation of data but as well framework agnostic modular architecture.

There is only one rest service. That simply serving all data at once. 

This is not optimum! We should have usually application that serving data in bundles on more than one request that's what makes RESTfull services strong. This is just simply serving one big bundle without pager for preview purpose.

Used technologies
=================

- typescript
- requirejs (amd modularisation)
- angularjs
- nodejs with gulp as development platform

This architecture is able to be loosely coupled as much as it is possible. That what is basicaly visible in ./src where main.ts file is present. This file is bootstrapping whole applicaiton. It's loading main module as first and than according to packages section inside each modules main.ts file.

Angular JS is part of each module and each module has it's own dependencies. In short time of customization angularjs application can be lazy loaded using specific approach which is not part of development preview.

How to run application
======================

You have to have properly installed nodejs environment and than just run these two commands.

1. $ npm install
2. $ npm start

Second command start application on http://localhost:3000